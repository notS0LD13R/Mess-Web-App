import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: import.meta.env.VITE_REACT_APP_apiKey,
    authDomain: import.meta.env.VITE_REACT_APP_authDomain,
    projectId: import.meta.env.VITE_REACT_APP_projectId,
    storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
    messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
    appId: import.meta.env.VITE_REACT_APP_appId,
    measurementId:import.meta.env.VITE_REACT_APP_measurementId 
  });

  export const auth = app.auth();
  export default app;
  