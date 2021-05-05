// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com/',
  firebase: {
    apiKey: 'AIzaSyAIDHy6WIsw80nyFWToWGcU3dYRyir9g3M',
    authDomain: 'platzi-store-61dcd.firebaseapp.com',
    projectId: 'platzi-store-61dcd',
    storageBucket: 'platzi-store-61dcd.appspot.com',
    messagingSenderId: '593438557972',
    appId: '1:593438557972:web:be522c28f8cf5cfff16401'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
