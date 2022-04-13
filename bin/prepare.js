#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const getPackageJson = () => JSON.parse(fs.readFileSync(path.resolve(__dirname, '../', 'package.json'), 'utf8'));

function createWeightAliases () {
  const weights = {
    100: [ 'thin' ],
    200: [ 'extralight', 'xlight', 'lighter' ],
    300: [ 'light' ],
    400: [ 'regular', 'book' ],
    500: [ 'medium' ],
    600: [ 'semibold' ],
    700: [ 'bold' ],
    800: [ 'extrabold', 'xbold', 'bolder' ],
    900: [ 'black' ],
  }

  const indexCSS = path.resolve(__dirname, '../dist/css', `./index.css`);
  fs.rmSync(indexCSS, {force: true});

  for (let weight in weights) {
    // create aliases for each font weight (200.css -> extralight.css, xlight.css, lighter.css)
    for (const style of weights[weight]) {
      fs.writeFileSync(
        path.resolve(__dirname, '../dist/css', `./${style}.css`), `/*! @typehaus/metropolis/${style}.css (${weight}) */ @import "./${weight}.css";`,
        'utf8'
      )
    }

    // import each weight into the main index.css file
    // (saves 1.5MB compared to lazily writing the same font data to multiple locations)
    fs.appendFileSync(
      indexCSS, `/*! @typehaus/metropolis/{${[ weight, ...weights[ weight ] ].join(',')}}.css */
@import "./${weight}.css";
`,
      'utf8'
    )
  }
}

function updatePackageExports (pkg = {}) {
  // update package.json main and types
  pkg.main = './index.css';
  pkg.types = './index.d.ts';
  // populate pkg.exports with initial values to make things easier
  pkg.exports = {
    ".": {
			"types": "./index.d.ts",
			"import": "./index.css",
			"require": "./index.css",
			"default": "./index.css"
		},
		"./index.d.ts": "./index.d.ts",
		"./package.json": "./package.json"
  }
  // initialize pkg.files (or erase if it already exists)
  pkg.files = []
  // find *all* font files, including the newly created aliases
  const cssFiles = Array.from(fs.readdirSync(path.join(__dirname, '../dist/css', './')).filter(i => i.endsWith('.css')));
  for (let file of cssFiles) {
    // ensure that each file is exposed in the package.json "exports" field
    pkg.exports[ `./${file}` ] = `./${file}`
    // and ensure each file is included in the package.json "files" field (for publishing to npm)
    pkg.files = [ ...pkg.files, `${file}` ]
  }
  pkg.files = Array.from(new Set(pkg.files))
  return pkg
}

function copyStaticFiles () {
  const files = ['license.md', 'readme.md', 'index.d.ts', '.gitignore']
  for (const file of files) {
    fs.copyFileSync(path.resolve('../', file), path.resolve('../dist/css/', file))
  }
}

(() => {
  // create aliases for each font weight
  createWeightAliases()
  // get our root package.json
  let pkg = getPackageJson()
  // update the package.json data (files, exports)
  pkg = updatePackageExports(pkg)
  // update publish configuration
  pkg.private = false;
  pkg.publishConfig = {
    access: "public",
    tag: "latest"
  }
  // remove package scripts, because why do we need them?
  delete pkg.scripts;
  // remove devDependencies
  delete pkg.devDependencies;
  // and remove prettier...
  delete pkg.prettier;
  // update author info
  pkg.author = {
    name: "Nicholas Berlette",
    email: "nick@typehaus.org",
    url: "https://typehaus.org"
  }
  // copy over static files (license.md, readme.md, etc.)
  copyStaticFiles()
  // write the updated package.json
  fs.writeFileSync(
    path.resolve(__dirname, '../dist/css/', 'package.json'),
    JSON.stringify(pkg, null, 2),
    'utf8'
  )
  console.log('🎉 Finished preparing dist/css for publishing to npm. OK to proceed.')
})();
