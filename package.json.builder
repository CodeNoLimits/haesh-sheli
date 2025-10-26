{
  "scripts": {
    "builder:sync": "python3 ~/claude_builder/builder_sync.py",
    "builder:deploy": "bash ~/claude_builder/deploy_to_builder.sh",
    "builder:pull": "python3 ~/claude_builder/builder_pull.py",
    "dev:builder": "concurrently \"npm run dev\" \"npm run builder:watch\"",
    "builder:watch": "nodemon --watch src --exec 'npm run builder:sync' --delay 5"
  },
  "devDependencies": {
    "concurrently": "^8.2.2",
    "nodemon": "^3.0.2"
  }
}
