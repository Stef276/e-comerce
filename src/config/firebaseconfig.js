// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3n342jLC8fphInSRtNt2rEoFGqJNZdFY",
  authDomain: "e-comerce6959.firebaseapp.com",
  projectId: "e-comerce6959",
  storageBucket: "e-comerce6959.firebasestorage.app",
  messagingSenderId: "520859659094",
  appId: "1:520859659094:web:474f35a6bc335c197f84f7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
