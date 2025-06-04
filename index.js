#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");

const projectRoot = process.cwd();

// func to read package.json
async function readPackageJson() {
  const pkgJsonPath = path.join(projectRoot, "package.json");
  const data = await fs.readFile(pkgJsonPath, "utf8");
  console.log(data);
}

readPackageJson();
