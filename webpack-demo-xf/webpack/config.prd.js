process.env.NODE_ENV = 'development';
process.env.NODE_ENV = 'production';

const merge = require('webpack-merge');
const common = require('./config.common.js');

module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map' // 生产无需映射
});