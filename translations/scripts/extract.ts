import { spawnSync } from 'child_process';
import * as fs from 'fs-extra';

function main() {
  // extract strings via ngx-extract
  const outFile = './src/assets/i18n/app-strings.json';
  spawnSync(
    `npx ngx-translate-extract --input ./src --output ${outFile} --key-as-default-value --replace --format json`,
    { shell: true, stdio: 'inherit' }
  );
  //  on windows --key-as-default-value doesn't work correctly so manually rewrite json to create en strings
  const json = fs.readJSONSync(outFile);
  const processedJson = {};
  Object.entries(json).forEach(
    ([key, value]) => (processedJson[key] = value ? value : key)
  );
  fs.writeJSONSync(outFile, processedJson);
}
main();
// ngx-translate-extract --input ./src --output ./src/assets/i81n/app-strings.json --key-as-default-value --replace --format json
