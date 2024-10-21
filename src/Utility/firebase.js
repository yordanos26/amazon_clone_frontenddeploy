// we're importing the core Firebase library, as well as the
// functions for authentication and the Firestore database
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration for the Firebase project you created in the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyDf5nWCiwi5DMf2zomFquiQYkf-KpKaJvQ",
  authDomain: "clone-92982.firebaseapp.com",
  projectId: "clone-92982",
  storageBucket: "clone-92982.appspot.com",
  messagingSenderId: "593401533092",
  appId: "1:593401533092:web:c153a5b113e62dd3268c31",
  measurementId: "G-JE7ZNGPRMH",
};

// Initialize the Firebase app. This creates a new instance of the Firebase app, which is the entry point for all  Firebase functionality
const app = firebase.initializeApp(firebaseConfig);

// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);

// Get the Firestore database for storing and retrieving data
export const db = app.firestore();
