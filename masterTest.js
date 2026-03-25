"use strict";
/* global it */
const path = require("path");
if (!__filename.startsWith(process.cwd() + path.sep))  // eslint-disable-line prefer-template
    throw new Error("You must execute these tests from the package base directory");
const relTestPath = __filename.substring(process.cwd().length + 1);
const fs = require("fs");
const ex =  // eslint-disable-next-line max-len
  /^test[/\\](\d+)[/\\](?:([\w-]+)[/\\])?([\w.-]+[/\\][\w-]+)-test[.]js$/.exec(relTestPath);
if (!ex) throw new Error(`Bad test file path: ${relTestPath}`);
const expectExitVal = parseInt(ex[1]);
const altscope = ex[2];
const tableBase = ex[3];
// eslint-disable-next-line no-extra-parens, prefer-template
const scriptPath = path.join(`${ex[1]}scripts`, `${altscope?(altscope+"/"):""}${tableBase}.js`);
if (!fs.existsSync(scriptPath)) throw new Error(`Script file missing: ${scriptPath}`);
if (!fs.statSync(scriptPath).isFile()) throw new Error(`Script is not a file: ${scriptPath}`);
const params = [ "node_modules/.bin/snLint", scriptPath, "-c" ];
if (altscope) params.splice(1, 0, "-a", altscope);
if (process.env.DEBUG) {
    params.splice(1, 0, "-d");
    console.debug("Lint params:", params);
}
const childProcess = require("child_process").
  spawnSync(process.execPath, params, { stdio: "inherit" });

it(altscope ? `${tableBase} | ${altscope}` : tableBase, () => {
    if (expectExitVal !== childProcess.status)
        throw new Error(`Failed with code ${childProcess.status} (expected ${expectExitVal})`);
});
