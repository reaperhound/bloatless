#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");

const projectRoot = process.cwd();

// func to read package.json
async function readPackageJson() {
  const pkgJsonPath = path.join(projectRoot, "test.json"); // Change test to package.json
  let data = await fs.readFile(pkgJsonPath, "utf8");
  data = JSON.parse(data); // parsing
  extractDeps(data);
}

function extractDeps(pkgJsonData) {
  let { dependencies: deps, devDependencies: devDeps } = pkgJsonData;
  [deps, devDeps] = [deps, devDeps].map((item) => Object.keys(item));
  console.log({ deps, devDeps });
}

readPackageJson();
