import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase} from'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDDEXvIk1zZkZQ_XbxNvdN26hwk8WIJxN4",
  authDomain: "pairme-dbd6d.firebaseapp.com",
  databaseURL: "https://pairme-dbd6d-default-rtdb.firebaseio.com",
  projectId: "pairme-dbd6d",
  storageBucket: "pairme-dbd6d.appspot.com",
  messagingSenderId: "765684285884",
  appId: "1:765684285884:web:86abd32d20ee8a35822bb9",
  measurementId: "G-PXRDEMCF6P"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);

const database = initializeFirestore(app, {experimentalForceLongPolling: true});
    
export { db, auth };