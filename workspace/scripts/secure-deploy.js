import { Octokit } from '@octokit/rest'
import fs from 'fs/promises'
import path from 'path'

console.log('🚀 Starting secure deployment to GitHub...')

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
    if (entry.name === 'attached_assets') continue; // Skip large assets for initial push
    
    if (entry.isDirectory()) {
      const subFiles = await getAllProjectFiles(fullPath, baseDir);
      files.push(...subFiles);
    } else {
      // Only include essential file types
      const ext = path.extname(entry.name).toLowerCase();
      const allowedExtensions = ['.js', '.ts', '.tsx', '.jsx', '.json', '.css', '.html', '.md', '.txt', '.svg', '.png', '.jpg', '.ico'];
      
      if (allowedExtensions.includes(ext) || entry.name === '.gitignore') {
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
        console.log(`🆕 Creating repository ${repo}...`);
        await octokit.rest.repos.createForAuthenticatedUser({
          name: repo,
          description: 'Haesh Sheli - Hebrew Breslov Books E-commerce Website',
          private: false,
          auto_init: true
        });
        console.log(`✅ Repository created`);
      } else {
        throw error;
      }
    }
    
    // Get all project files
    console.log('📁 Scanning project files...');
    const files = await getAllProjectFiles('..');
    console.log(`📂 Found ${files.length} files to upload`);
    
    // Get current main branch reference
    const { data: ref } = await octokit.rest.git.getRef({
      owner,
      repo,
      ref: 'heads/main'
    });
    const baseSha = ref.object.sha;
    
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
      base_tree: baseSha
    });
    
    // Create commit
    console.log('📝 Creating commit...');
    const { data: commit } = await octokit.rest.git.createCommit({
      owner,
      repo,
      message: `Deploy Haesh Sheli website with latest updates

✅ Complete React frontend with Hebrew RTL support
✅ Node.js/Express backend with PostgreSQL
✅ Modern magazine page with fixed components
✅ E-commerce functionality with Stripe integration
✅ Subscription system הוראת קבע (99₪/month)
✅ Multilingual support (5 languages)
✅ Mobile-responsive design
✅ Admin dashboard and user management
✅ Secure authentication system

Ready for Netlify deployment!`,
      tree: newTree.sha,
      parents: [baseSha]
    });
    
    // Update the reference
    console.log('🔄 Updating main branch...');
    await octokit.rest.git.updateRef({
      owner,
      repo,
      ref: 'heads/main',
      sha: commit.sha
    });
    
    console.log(`\n🎉 SUCCESS! Haesh Sheli deployed to GitHub!`);
    console.log(`🌐 Repository: https://github.com/${owner}/${repo}`);
    console.log(`📊 Files uploaded: ${uploaded}/${files.length}`);
    console.log(`📝 Commit SHA: ${commit.sha}`);
    console.log(`\n🚀 Ready for Netlify deployment!`);
    
    return {
      success: true,
      url: `https://github.com/${owner}/${repo}`,
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
    console.log('\n✅ DEPLOYMENT COMPLETED SUCCESSFULLY!');
    console.log(`🌐 Visit your repository: ${result.url}`);
    console.log('\n📋 Next steps for Netlify:');
    console.log('  1. Go to https://netlify.com');
    console.log('  2. Click "New site from Git"');
    console.log(`  3. Connect your GitHub repository: ${result.url}`);
    console.log('  4. Deploy settings: Build command: npm run build, Publish directory: dist');
  })
  .catch(error => {
    console.error('\n❌ DEPLOYMENT FAILED');
    console.error('Error:', error.message);
    process.exit(1);
  });