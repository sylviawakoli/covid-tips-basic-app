# Building Release

```
ionic cordova build android --prod --release
```

This will generate a release apk in `platforms\android\app\build\outputs\apk\release`

```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore covid-tips.keystore platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk idems
```

Note, this assumes that you have jarsigner configured in Path (google if not) and app keystore file in root folder (request access from devs) with password knowledge

```
zipalign -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk releases/covid-tips.apk
```

Assumes zipalign in path (if not google). Recommended to rename corresponding apk to match version number
(TODO - automate name from package.json or config.xml)
