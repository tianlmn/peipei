const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack/config.common.js');
const devConfig = require('./webpack/config.dev.js');
const prdConfig = require('./webpack/config.prd.js');
config = object.assign(config,process.env.NODE_ENV==='production'?prdConfig:devConfig);
const options = {
  contentBase: './dist',
  // 开发server运行使用热替换
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});