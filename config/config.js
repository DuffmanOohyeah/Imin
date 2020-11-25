'use strict';

const fs = require('fs');
const ports = [];
let envName = (process.env.NODE_ENV || 'development');
let rootDir = process.cwd() + '\\';

switch( envName ){
  case 'development':
    ports.push(3000);
  break;
  case 'staging':
    ports.push(3000);
  break;
  case 'production':
    ports.push(8080, 443);
  break;
  default:
    ports.push(3000);
  break;
}

const app = {
  envName: envName,
  ports: ports,
  rootDir: rootDir,
  publicDir: rootDir + 'public\\'
};

const htmHead = () => {
  return fs.readFileSync(exports.app.publicDir + '_header.htm', 'utf8');
};

const htmFoot = () => {
  return '\n' + fs.readFileSync(exports.app.publicDir + '_footer.htm', 'utf8');
};

exports = module.exports = {
  app: app,
  htmHead: htmHead,
  htmFoot: htmFoot
};
