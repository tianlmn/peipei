process.env.NODE_ENV = 'development';

const merge = require('webpack-merge');
const common = require('./config.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
});