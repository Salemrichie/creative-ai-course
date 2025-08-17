module.exports = {
  apps: [
    {
      name: 'creative-ai-course',
      script: 'npm',
      args: 'run dev',
      cwd: '/home/user/webapp/creative-ai-course',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      ignore_watch: ['node_modules', 'dist'],
      max_memory_restart: '1G'
    }
  ]
};