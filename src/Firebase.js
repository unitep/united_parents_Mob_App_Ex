// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDPfu5SZdGj7ReQ2UbO2xyR4EgoJX6S8H4",
    authDomain: "united-parents.firebaseapp.com",
    databaseURL: "https://united-parents-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "united-parents",
    storageBucket: "united-parents.appspot.com",
    messagingSenderId: "214299041255",
    appId: "1:214299041255:web:dd761d9b9c85e8214d7142"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const database = getDatabase(app)
export default app