// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

interface AppData {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const appData = (window as any).APP_DATA
? ((window as any).APP_DATA as AppData)
: ({
  apiKey: '$FIRE_APIKEY',
  authDomain: '$FIRE_AUTH_DOMAIN',
  databaseURL: '$FIRE_DATABASE_URL',
  projectId: '$FIRE_PROJECT_ID',
  storageBucket: '$FIRE_STORAGE_BUCKET',
  messagingSenderId: '$FIRE_MSG_SENDER_ID',
  appId: '$FIRE_APP_ID',
  measurementId: '$FIRE_MEASUREMENT_ID',
} as AppData);

export const environment = {
  production: false,
  firebase: {
    apiKey: appData.apiKey,
    authDomain: appData.authDomain,
    databaseURL: appData.databaseURL,
    projectId: appData.projectId,
    storageBucket: appData.storageBucket,
    messagingSenderId: appData.messagingSenderId,
    appId: appData.appId,
    measurementId: appData.measurementId,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
