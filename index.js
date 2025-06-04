#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");

const projectRoot = process.cwd();

// func to read package.json
async function readPackageJson() {
  const pkgJsonPath = path.join(projectRoot, "package.json");
  let data = await fs.readFile(pkgJsonPath, "utf8");
  data = JSON.parse(data); // parsing
  console.log(data);
}

readPackageJson();
