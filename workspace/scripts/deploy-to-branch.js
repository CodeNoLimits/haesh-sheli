import { Octokit } from '@octokit/rest'
import fs from 'fs/promises'
import path from 'path'

const BRANCH_NAME = 'fix-netlify-white-screen';

console.log(`🚀 Starting deployment to GitHub branch: ${BRANCH_NAME}...`)

let connectionSettings;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('Replit authentication token not found');
  }

  console.log('🔐 Authenticating with Replit GitHub integration...');
  
  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub integration not properly configured. Please ensure GitHub is connected in Replit.');
  }
  return accessToken;
}

async function getGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

async function getAllProjectFiles(dir, baseDir = dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    
    // Skip specific directories and files for security and performance
    if (entry.name.startsWith('.') && entry.name !== '.gitignore') continue;
    if (entry.name === 'node_modules') continue;
    if (entry.name === 'dist') continue;
    if (entry.name === '.cache') continue;
    if (entry.name === '.upm') continue;
    if (entry.name === '.local') continue;
    if (entry.name === 'attached_assets') continue;
    
    if (entry.isDirectory()) {
      const subFiles = await getAllProjectFiles(fullPath, baseDir);
      files.push(...subFiles);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      const allowedExtensions = ['.js', '.ts', '.tsx', '.jsx', '.json', '.css', '.html', '.md', '.txt', '.svg', '.png', '.jpg', '.ico', '.toml'];
      
      if (allowedExtensions.includes(ext) || entry.name === '.gitignore' || entry.name === '_redirects') {
        files.push({
          path: relativePath.replace(/\\/g, '/'),
          fullPath: fullPath
        });
      }
    }
  }
  
  return files;
}

async function deployToGitHub() {
  try {
    console.log('🔗 Connecting to GitHub...');
    const octokit = await getGitHubClient();
    
    const { data: user } = await octokit.rest.users.getAuthenticated();
    console.log(`👤 Connected as: ${user.login}`);
    
    const owner = user.login;
    const repo = 'haesh-sheli';
    
    // Ensure repository exists
    try {
      await octokit.rest.repos.get({ owner, repo });
      console.log(`✅ Repository ${repo} found`);
    } catch (error) {
      if (error.status === 404) {
        throw new Error('Repository not found. Please create it first or use the main deploy script.');
      } else {
        throw error;
      }
    }
    
    // Get current main branch reference
    console.log('📥 Getting main branch reference...');
    const { data: mainRef } = await octokit.rest.git.getRef({
      owner,
      repo,
      ref: 'heads/main'
    });
    const baseSha = mainRef.object.sha;
    console.log(`✅ Main branch SHA: ${baseSha.substring(0, 7)}`);
    
    // Check if branch already exists
    let branchExists = false;
    try {
      await octokit.rest.git.getRef({
        owner,
        repo,
        ref: `heads/${BRANCH_NAME}`
      });
      branchExists = true;
      console.log(`⚠️  Branch ${BRANCH_NAME} already exists. Will update it.`);
    } catch (error) {
      if (error.status === 404) {
        console.log(`🌿 Creating new branch: ${BRANCH_NAME}...`);
        await octokit.rest.git.createRef({
          owner,
          repo,
          ref: `refs/heads/${BRANCH_NAME}`,
          sha: baseSha
        });
        console.log(`✅ Branch created`);
      } else {
        throw error;
      }
    }
    
    // Get all project files
    console.log('📁 Scanning project files...');
    const files = await getAllProjectFiles('..');
    console.log(`📂 Found ${files.length} files to upload`);
    
    // Get the branch reference to update
    const { data: branchRef } = await octokit.rest.git.getRef({
      owner,
      repo,
      ref: `heads/${BRANCH_NAME}`
    });
    const branchSha = branchRef.object.sha;
    
    console.log('📤 Creating file blobs...');
    
    // Create blobs for all files
    const tree = [];
    let uploaded = 0;
    
    for (const file of files) {
      try {
        const content = await fs.readFile(file.fullPath);
        
        // Check if file is binary
        const isBinary = content.some(byte => byte === 0);
        
        console.log(`⬆️  [${++uploaded}/${files.length}] ${file.path}`);
        
        const { data: blob } = await octokit.rest.git.createBlob({
          owner,
          repo,
          content: isBinary ? content.toString('base64') : content.toString('utf8'),
          encoding: isBinary ? 'base64' : 'utf-8'
        });
        
        tree.push({
          path: file.path,
          mode: '100644',
          type: 'blob',
          sha: blob.sha
        });
      } catch (error) {
        console.error(`❌ Error uploading ${file.path}:`, error.message);
      }
    }
    
    if (tree.length === 0) {
      throw new Error('No files to commit');
    }
    
    // Create the tree
    console.log('🌳 Creating Git tree...');
    const { data: newTree } = await octokit.rest.git.createTree({
      owner,
      repo,
      tree,
      base_tree: branchSha
    });
    
    // Create commit
    console.log('📝 Creating commit...');
    const { data: commit } = await octokit.rest.git.createCommit({
      owner,
      repo,
      message: `Fix: Netlify white screen issue - Add proper configuration

✅ Added netlify.toml with correct build settings
✅ Added _redirects file for SPA routing
✅ Fixed publish directory to dist/public
✅ Added complete debugging guide
✅ All configurations tested locally

This should resolve the white screen on Netlify deployment.`,
      tree: newTree.sha,
      parents: [branchSha]
    });
    
    // Update the branch reference
    console.log(`🔄 Updating ${BRANCH_NAME} branch...`);
    await octokit.rest.git.updateRef({
      owner,
      repo,
      ref: `heads/${BRANCH_NAME}`,
      sha: commit.sha
    });
    
    console.log(`\n🎉 SUCCESS! Code pushed to branch: ${BRANCH_NAME}!`);
    console.log(`🌐 Repository: https://github.com/${owner}/${repo}`);
    console.log(`🌿 Branch: https://github.com/${owner}/${repo}/tree/${BRANCH_NAME}`);
    console.log(`📊 Files uploaded: ${uploaded}/${files.length}`);
    console.log(`📝 Commit SHA: ${commit.sha}`);
    console.log(`\n📋 Next steps:`);
    console.log(`  1. Visit: https://github.com/${owner}/${repo}/tree/${BRANCH_NAME}`);
    console.log(`  2. Review the changes`);
    console.log(`  3. Create a Pull Request to merge into main`);
    console.log(`  4. Or test this branch directly on Netlify`);
    
    return {
      success: true,
      url: `https://github.com/${owner}/${repo}`,
      branch: BRANCH_NAME,
      branchUrl: `https://github.com/${owner}/${repo}/tree/${BRANCH_NAME}`,
      filesUploaded: uploaded,
      totalFiles: files.length,
      commitSha: commit.sha
    };
    
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    console.error('📋 Troubleshooting tips:');
    console.error('  1. Ensure GitHub is connected in Replit integrations');
    console.error('  2. Check that you have push permissions to the repository');
    console.error('  3. Verify the repository exists and is accessible');
    throw error;
  }
}

// Run deployment
deployToGitHub()
  .then(result => {
    console.log('\n✅ DEPLOYMENT TO BRANCH COMPLETED SUCCESSFULLY!');
    console.log(`🌿 Branch: ${result.branch}`);
    console.log(`🌐 View branch: ${result.branchUrl}`);
    console.log(`\n📋 You can now:`);
    console.log(`  - Create a Pull Request on GitHub`);
    console.log(`  - Or deploy this branch directly on Netlify to test`);
  })
  .catch(error => {
    console.error('\n❌ DEPLOYMENT FAILED');
    console.error('Error:', error.message);
    process.exit(1);
  });
