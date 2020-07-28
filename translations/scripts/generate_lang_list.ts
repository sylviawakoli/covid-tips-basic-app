let fs = require("fs");
let path = require("path");

interface ILanguage {
  code: string;
  name: string;
}

var langNamesTSVString = fs
  .readFileSync(path.join(__dirname, "../lang_names.tsv"))
  .toString();

var codeToName: { [langCode: string]: string } = {};

langNamesTSVString
  .split("\n")
  .slice(1)
  .forEach((line) => {
    let parts = line.replace("\r", "").split("\t");
    let langName = parts[0];
    let langCode = parts[1];
    codeToName[langCode] = langName;
  });

var langProgress = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../lang_progress.json")).toString()
);

var translatedLanguages: ILanguage[] = [];

langProgress.data.forEach((elem) => {
  let mainId = elem.data.languageId.split("-")[0];
  if (elem.data.phrases.translated > 100 && codeToName[mainId]) {
    translatedLanguages.push({
      code: mainId,
      name: codeToName[mainId],
    });
  }
});

console.log(translatedLanguages);
