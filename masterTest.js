if (!__filename.startsWith(process.cwd() + "/"))
    throw new Error("You must execute these tests from the package base directory");
const relTestPath = __filename.substring(process.cwd().length + 1);
const path = require("path");
const fs = require("fs");
const ex = /^test[/](good|bad)[/](?:(\w+)[/])?(\w+[/]\w+)-test[.]js$/.exec(relTestPath);
if (!ex) throw new Error(`Bad test file path: ${relTestPath}`);
const shouldSucceed = ex[1] === "good";
const altscope = ex[2];
const tableBase = ex[3];
const scriptPath = path.join(`${ex[1]}Scripts`, `${altscope?(altscope+"/"):""}${tableBase}.js`);
if (!fs.existsSync(scriptPath)) throw new Error(`Script file missing: ${scriptPath}`);
if (!fs.statSync(scriptPath).isFile()) throw new Error(`Script is not a file: ${scriptPath}`);
const params = [ "node_modules/.bin/snLint", scriptPath ];
if (altscope) params.splice(1, 0, "-a", altscope);
if (process.env.DEBUG) {
    if (altscope) params.splice(1, 0, "-d");
    console.debug("Lint params:", params);
}
const childProcess = require("child_process").
  spawnSync(process.execPath, params, { stdio: "inherit" });

it(tableBase, () => {
    if ((shouldSucceed && childProcess.status !== 0)
      || (!shouldSucceed && childProcess.status === 0))
        throw new Error(`Failed with code ${childProcess.status}`);
});
