import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyACQrMEyYAJRFW4NPLG9XsmUJFlHqeedTU",
  authDomain: "nodejs-6a166.firebaseapp.com",
  databaseURL: "https://nodejs-6a166-default-rtdb.firebaseio.com",
  projectId: "nodejs-6a166",
  storageBucket: "nodejs-6a166.firebasestorage.app",
  messagingSenderId: "543496191870",
  appId: "1:543496191870:web:5dbfab1dbc6ee4ab91bd2f",
  measurementId: "G-W7D1FCFCDB"
};

// Evita reinicialização em hot-reload (nodemon)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);
