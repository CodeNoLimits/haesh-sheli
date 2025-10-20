import { Octokit } from '@octokit/rest'
import fs from 'fs'
import path from 'path'

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
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

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
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function fastPushToGitHub() {
  try {
    console.log('🚀 PUBLICATION RAPIDE EN COURS...');
    const accessToken = await getAccessToken();
    const octokit = new Octokit({ auth: accessToken });
    
    const { data: user } = await octokit.rest.users.getAuthenticated();
    console.log(`👤 Connecté: ${user.login}`);
    
    const repoName = 'haesh-sheli';
    const branchName = 'feature/complete-app-v2';
    
    // Get repo
    const { data: repo } = await octokit.rest.repos.get({
      owner: user.login,
      repo: repoName
    });
    
    console.log('📦 Collecte des fichiers essentiels...');
    
    // Essential files only - NO attached_assets
    const essentialFiles = [
      'package.json',
      'package-lock.json',
      'vite.config.ts', 
      'tailwind.config.ts',
      'drizzle.config.ts',
      '.gitignore',
      'replit.md',
      'README.md'
    ];
    
    const essentialDirs = [
      'client/src',
      'client/public', 
      'server',
      'shared'
    ];
    
    const files = [];
    
    // Add essential files
    for (const file of essentialFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        files.push({
          path: file,
          content: content
        });
      }
    }
    
    // Add essential directories
    function addDirectory(dir) {
      if (!fs.existsSync(dir)) return;
      try {
        const items = fs.readdirSync(dir, { withFileTypes: true });
        for (const item of items) {
          const fullPath = path.join(dir, item.name);
          if (item.isDirectory()) {
            addDirectory(fullPath);
          } else if (item.isFile()) {
            // Skip binary files and very large files
            const ext = path.extname(item.name).toLowerCase();
            if (['.js', '.ts', '.tsx', '.jsx', '.json', '.css', '.html', '.md', '.txt', '.svg'].includes(ext)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                files.push({
                  path: fullPath.replace(/\\/g, '/'),
                  content: content
                });
              } catch (err) {
                console.log(`⚠️ Skipping ${fullPath}: ${err.message}`);
              }
            }
          }
        }
      } catch (err) {
        console.log(`⚠️ Skipping directory ${dir}: ${err.message}`);
      }
    }
    
    for (const dir of essentialDirs) {
      addDirectory(dir);
    }
    
    console.log(`📂 ${files.length} fichiers à publier`);
    
    // Get main branch reference
    const { data: mainRef } = await octokit.rest.git.getRef({
      owner: user.login,
      repo: repoName,
      ref: 'heads/main'
    });
    
    // Create new branch
    try {
      await octokit.rest.git.createRef({
        owner: user.login,
        repo: repoName,
        ref: `refs/heads/${branchName}`,
        sha: mainRef.object.sha
      });
      console.log(`✅ Branche créée: ${branchName}`);
    } catch (error) {
      if (error.status === 422) {
        console.log(`ℹ️ Branche ${branchName} existe déjà`);
      } else {
        throw error;
      }
    }
    
    // Create blobs for all files
    const tree = [];
    for (const file of files) {
      const { data: blob } = await octokit.rest.git.createBlob({
        owner: user.login,
        repo: repoName,
        content: Buffer.from(file.content).toString('base64'),
        encoding: 'base64'
      });
      
      tree.push({
        path: file.path,
        mode: '100644',
        type: 'blob',
        sha: blob.sha
      });
    }
    
    console.log('🌳 Création de l\'arbre Git...');
    
    // Create tree
    const { data: newTree } = await octokit.rest.git.createTree({
      owner: user.login,
      repo: repoName,
      tree: tree,
      base_tree: mainRef.object.sha
    });
    
    // Create commit
    const { data: newCommit } = await octokit.rest.git.createCommit({
      owner: user.login,
      repo: repoName,
      message: 'Complete Haesh Sheli Application - All Features Implemented\n\n✅ Fixed Yakov investor dashboard (4 working tabs)\n✅ Redesigned header menu (2-row layout)\n✅ Integrated authentic YouTube videos from קרן רבי ישראל הקרן\n✅ Renamed Breslov Style → Keren Style (avoid plagiat)\n✅ Created rich Keren Style page (spiritual content)\n✅ Created dynamic Haesh Hype page (community content)\n✅ Fully functional e-commerce with subscription tiers\n✅ Dual chat system (Gemini + OpenAI)\n✅ Mobile-optimized design\n✅ Hebrew RTL support with multilingual interface',
      tree: newTree.sha,
      parents: [mainRef.object.sha]
    });
    
    // Update branch reference
    await octokit.rest.git.updateRef({
      owner: user.login,
      repo: repoName,
      ref: `heads/${branchName}`,
      sha: newCommit.sha
    });
    
    console.log('🎉 PUBLICATION RÉUSSIE !');
    console.log(`🌐 Repository: https://github.com/${user.login}/${repoName}`);
    console.log(`🌿 Branche: ${branchName}`);
    console.log(`💻 Commit: ${newCommit.sha.substring(0, 7)}`);
    
    return {
      repo: `${user.login}/${repoName}`,
      branch: branchName,
      commit: newCommit.sha,
      url: `https://github.com/${user.login}/${repoName}/tree/${branchName}`
    };
    
  } catch (error) {
    console.error('❌ ERREUR:', error.message);
    throw error;
  }
}

fastPushToGitHub()
  .then(result => {
    console.log(`\n🎯 SUCCÈS TOTAL !`);
    console.log(`📦 Repo: ${result.repo}`);
    console.log(`🌿 Branche: ${result.branch}`);
    console.log(`🔗 URL: ${result.url}`);
  })
  .catch(error => {
    console.error('\n💥 ÉCHEC:', error.message);
    process.exit(1);
  });