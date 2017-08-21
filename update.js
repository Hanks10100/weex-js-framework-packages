const fs = require('fs')
const semver = require('semver')
const child_process = require('child_process')
const pkg = require('./package.json')

function exec (command) {
  const tasks = Array.isArray(command) ? command : [command]
  let res = ''
  tasks.forEach(function (task) {
    console.log(' =>', task)
    res = child_process.execSync(task)
  })
  return res.toString()
}

let targetVersion = process.argv[2]
let isLatest = false

if (!semver.valid(targetVersion)) {
  targetVersion = exec(`npm view weex-js-framework version`).trim()
  isLatest = true
}

const formerVersion = pkg.devDependencies['weex-js-framework']
if (formerVersion === targetVersion) {
  console.log(` => weex-js-framework@${targetVersion} is already installed.`)
  process.exit()
}

exec([
  `npm install weex-js-framework@${targetVersion} -E`
])

const filePath = `v${semver.major(targetVersion)}.${semver.minor(targetVersion)}`
if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath)
}

exec([
  `cp node_modules/weex-js-framework/index.js ${filePath}/v${targetVersion}.js`,
  `cp node_modules/weex-js-framework/index.min.js ${filePath}/v${targetVersion}.min.js`,
])

if (isLatest) {
  exec([
    `cp node_modules/weex-js-framework/index.js ${filePath}/index.js`,
    `cp node_modules/weex-js-framework/index.min.js ${filePath}/index.min.js`,
    `cp node_modules/weex-js-framework/index.js index.js`,
    `cp node_modules/weex-js-framework/index.min.js index.min.js`
  ])
}

exec([
  `git add -A`,
  `git commit -m "add v${targetVersion}"`
])
