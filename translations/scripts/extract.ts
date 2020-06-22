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
  for (var i = 0; i < 15; i++) {
    let outFile = `./src/assets/i18n/topics/topic-${i}.json`;
    let inFile = `./src/topics/content/topic-${i}.html`;
    spawnSync(
      `${binPath} --input ./src/topics/content/topic-${i}.html --output ${outFile} --key-as-default-value --replace --format namespaced-json`,
      { shell: true, stdio: "inherit" }
    );
    // create additional copy as default en strings
    fs.copyFileSync(outFile, outFile.replace(".json", ".en.json"));
  }
}
main();
