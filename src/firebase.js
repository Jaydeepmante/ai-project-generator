/**
 * Firebase Configuration for Innovexa AI
 * 
 * To get your real credentials:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project (or select an existing one)
 * 3. Add a Web App to your project
 * 4. Copy the `firebaseConfig` object and replace the placeholders below
 */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWRq1-Lwmd7m5tZDv3RXAaoC3PSFh3Zjw",
  authDomain: "ai-project-generator-20825.firebaseapp.com",
  projectId: "ai-project-generator-20825",
  storageBucket: "ai-project-generator-20825.firebasestorage.app",
  messagingSenderId: "1087634456808",
  appId: "1:1087634456808:web:8b25367a4ecf21939f095d",
  measurementId: "G-XJ3MDZ413W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
