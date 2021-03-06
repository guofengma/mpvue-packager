#!/usr/bin/env node

const program = require('commander')

program
  .option('-c, --config <path>', 'set webpack config path. defaults to ./webpack.conf.js', './webpack.conf.js')
  .option('-m, --mode <type>', 'set build mode type. defaults to mp', 'mp')
  .option('-o, --output <path>', 'set outpot path. defaults to ./dist', './dist')
  .option('-p, --port <port>', 'set dev-server port. defaults to 8080', '8080')
  .option('-t, --target <platform>', 'set target platform. defaults to wx', 'wx')
  .option('--analyze', 'analyze production bundle size. defaults to false', false)
  .option('--open', 'auto open browser. defaults to false', false)

program
  .command('dev')
  .description('development')
  .action(() => {
    process.env.NODE_ENV = 'development'
    process.env.MODE = program.mode
    require(`../build/${program.mode}/dev`)
  })

program
  .command('build')
  .description('production')
  .action(() => {
    process.env.NODE_ENV = 'production'
    process.env.MODE = program.mode
    require('../build/build')
  })

program.parse(process.argv)
