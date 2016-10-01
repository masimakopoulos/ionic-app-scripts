var fs = require('fs');
var path = require('path');


// copy package json
var packageJsonPath = path.join(process.cwd(), 'package.json');
var packageJson = require(packageJsonPath);
if (! packageJson) {
  throw new Error('Can\'t find package json');
}

delete packageJson.devDependencies;

fs.writeFile('./dist/package.json', JSON.stringify(packageJson, null, 2));

// copy readme
var readmePath = path.join(process.cwd(), 'README.md');
var readmeContent = fs.readFileSync(readmePath).toString();
fs.writeFileSync(path.join(process.cwd(), 'dist', 'README.md'), readmeContent);

// copy license
var licensePath = path.join(process.cwd(), 'LICENSE');
var licenseContent = fs.readFileSync(licensePath).toString();
fs.writeFileSync(path.join(process.cwd(), 'dist', 'LICENSE'), licenseContent);