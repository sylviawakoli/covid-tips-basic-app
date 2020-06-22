import { spawnSync } from "child_process";
import * as path from "path";
import * as fs from "fs-extra";

const TIP_SHEETS_CONTENT_DIR = path.resolve(
  process.cwd(),
  "src/app/tip-sheets/content"
);
const BIN_PATH = path.resolve(
  process.cwd(),
  "node_modules/.bin/ngx-translate-extract"
);

/*********************************************************************************
 * This script extracts all strings from the src directory of the project,
 * with additional customisation of splitting files used in tip sheets content
 * as individual json files, and a single json file for the rest of app content.
 *********************************************************************************/
function main() {
  extractOtherAppStrings();
  extractStringsByTipSheet();
}
main();

/**
 * Extract strings from tip sheets into individual files for translation
 */
function extractStringsByTipSheet() {
  const sheetFiles = fs
    .readdirSync(TIP_SHEETS_CONTENT_DIR)
    .filter((f) => path.extname(f) === ".html");
  for (let file of sheetFiles) {
    const outFile = `./src/assets/i18n/${file.replace(".html", ".json")}`;
    spawnSync(
      `${BIN_PATH} --input ./${TIP_SHEETS_CONTENT_DIR}/${file} --output ${outFile} --key-as-default-value --replace --format-indentation "  "`,
      { shell: true, stdio: "inherit" }
    );
  }
}

/**
 * Extract strings from all files that are not tip-sheets to single app-strings file
 * As there is no nice way to exclude a folder from input glob (only file type), move
 * the folder before generating, and then move back
 */
function extractOtherAppStrings() {
  // move tips content so not read by extraction
  fs.moveSync(TIP_SHEETS_CONTENT_DIR, "./tip-sheets-content-tmp");
  // extract all strings
  const outFile = "./src/assets/i18n/app-strings.json";
  spawnSync(
    `${BIN_PATH} --input ./src --output ${outFile} --key-as-default-value --replace --format-indentation "  "`,
    { shell: true, stdio: "inherit" }
  );
  // move tip sheets content back
  fs.moveSync("./tip-sheets-content-tmp", TIP_SHEETS_CONTENT_DIR);
}
