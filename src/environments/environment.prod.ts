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
  production: true,
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
