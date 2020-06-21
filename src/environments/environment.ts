// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDaQHCqPPPHWAPsjOR4XUPR4WDG91ER4SQ",
    authDomain: "covid-tips-basic-app.firebaseapp.com",
    databaseURL: "https://covid-tips-basic-app.firebaseio.com",
    projectId: "covid-tips-basic-app",
    storageBucket: "covid-tips-basic-app.appspot.com",
    messagingSenderId: "575025988460",
    appId: "1:575025988460:web:8d4cd694399aa6f75de949",
    measurementId: "G-97LQGN7T9W",
  },
  rapidPro: {
    contactRegisterUrl:
      "https://rapidpro.idems.international/c/fcm/a7e3bf90-9bcd-4ea3-92a4-9274a79de401/register",
    receiveUrl:
      "https://rapidpro.idems.international/c/fcm/a7e3bf90-9bcd-4ea3-92a4-9274a79de401/receive",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
