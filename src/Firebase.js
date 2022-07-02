// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCC9nMYEDcR0v5VJ4HQ_EisCU64Qs4yGlg",
    authDomain: "united-parents-app-grp5.firebaseapp.com",
    databaseURL: "https://united-parents-app-grp5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "united-parents-app-grp5",
    storageBucket: "united-parents-app-grp5.appspot.com",
    messagingSenderId: "994199980314",
    appId: "1:994199980314:web:0e0095358c190e11f584a3"

  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const database = getDatabase(app)
export default app