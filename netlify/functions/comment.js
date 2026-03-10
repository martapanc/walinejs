const http = require('http');

const serverless = require('serverless-http');

const Application = require('../../packages/server/index.js');

const app = Application({
  env: 'netlify',
});

module.exports.handler = serverless(http.createServer(app));
