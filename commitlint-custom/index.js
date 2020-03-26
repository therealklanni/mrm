const { lines, install } = require('mrm-core')

function task() {
  const config = lines('commitlint.config.js')

  const contents = config.get()

  config
    .remove(contents)
    .add(`module.exports = {extends: ['@therealklanni']}\n`)
    .save()

  install(['@therealklanni/commitlint-config'])
}

task.description = 'Updates commitlint config to @therealklanni/commitlint-config'

module.exports = task;
