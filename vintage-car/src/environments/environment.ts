// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: "AIzaSyBMqmFabr9fD7Zi5xcqjRt2yUvuLec64t4",
  authDomain: "vintagecar-bfe05.firebaseapp.com",
  projectId: "vintagecar-bfe05",
  storageBucket: "vintagecar-bfe05.appspot.com",
  messagingSenderId: "861719276967",
  appId: "1:861719276967:web:714b87b56379162da99a82",
  measurementId: "G-T5TZHDXZW3"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
