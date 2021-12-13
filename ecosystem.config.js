module.exports = {
  apps: [
    {
      name: 'cashbooks-vite-h5',
      script: 'vite-cashbook-port-serve.js'
    },
  ],
  deploy: {
    production: {
      key: '~/.ssh/id_rsa',
      user: 'root',
      host: '81.68.165.190',
      ref: 'origin/master',
      repo: 'git@github.com:Kongbo996/cashbooks-vite-h5.git',
      path: '/root/cashbook-vite-h5',
      'post-deploy': 'git reset --hard && git checkout master && git pull && npm i --production=false && npm run build && pm2 startOrReload ecosystem.config.js',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}
