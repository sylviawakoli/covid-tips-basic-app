import { spawnSync } from "child_process";
import * as path from "path";
import * as fs from "fs-extra";

function main() {
  // extract strings via ngx-extract
  // call from node_modules instead of regular npm script to allow custom methods after execution
  const binPath = path.resolve(
    process.cwd(),
    "node_modules/.bin/ngx-translate-extract"
  );
  const outFile = "./src/assets/i18n/app-strings.json";
  spawnSync(
    `${binPath} --input ./src --output ${outFile} --key-as-default-value --replace --format namespaced-json`,
    { shell: true, stdio: "inherit" }
  );
  // create additional copy as default en strings
  fs.copyFileSync(outFile, outFile.replace("app-strings", "app-strings.en"));
}
main();
