// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDtFcRSyjy8UxIMMzwbBDbaYMr52uaH14Q",
  authDomain: "salesforce-pd-questions.firebaseapp.com",
  projectId: "salesforce-pd-questions",
  storageBucket: "salesforce-pd-questions.appspot.com",
  messagingSenderId: "557663196267",
  appId: "1:557663196267:web:498730c4c56c3053f64d2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);