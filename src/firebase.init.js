import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const env = import.meta.env;

const firebaseConfig = {
    apiKey: env.APP_FIREBASE_API_KEY,
    authDomain: env.APP_FIREBASE_AUTH_DOMAIN,
    projectId: env.APP_FIREBASE_PROJECT_ID,
    storageBucket: env.APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
