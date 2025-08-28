// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase Console > Project settings > Web app config
const firebaseConfig = {
  apiKey: "AIzaSyA0rrftH1qDBJl41HT9S2UmbU3-oaLoR64",
  authDomain: "cvapp-e4d4a.firebaseapp.com",
  projectId: "cvapp-e4d4a",
  storageBucket: "cvapp-e4d4a.firebasestorage.app",
  messagingSenderId: "950825970393",
  appId: "1:950825970393:web:6ece2858a9e15d11b7acc8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
