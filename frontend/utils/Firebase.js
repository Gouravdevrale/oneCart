import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
   authDomain: "loginonecart-2b262.firebaseapp.com",
  projectId: "loginonecart-2b262",
  storageBucket: "loginonecart-2b262.firebasestorage.app",
  messagingSenderId: "1026367912016",
  appId: "1:1026367912016:web:8220862be74b21e7d53955"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

