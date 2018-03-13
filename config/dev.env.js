'use strict'

var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseApiUrl:'"http://59.110.225.214:8092/api/"',
  FileSingle:'"http://59.110.225.214:8093/api/v1/OSS/FileSingle"',
  FileByGroup:'"http://59.110.225.214:8093/api/v1/OSS/FileByGroup"'
})
