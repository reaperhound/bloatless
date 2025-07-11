#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");
const glob = require("fast-glob");

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
  deps = deps ? Object.keys(deps) : [];
  devDeps = devDeps ? Object.keys(devDeps) : [];
  console.log({ deps, devDeps });
}

async function crawlDir(path) {
  console.log("----------Crawling--Directories-----------");
  const files = await glob(["./**/*.js"], { ignore: ["node_modules"] });
  console.log(files);
}

readPackageJson();
crawlDir(path.join(projectRoot, "index.js"));
