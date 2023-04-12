import firebase from 'firebase/compat/app';
import dotenv from  'dotenv'

dotenv.config();

const app = firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId:process.env.measurementId 
  });
export default app;
  