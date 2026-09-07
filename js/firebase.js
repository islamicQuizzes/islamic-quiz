import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getDatabase
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyA1rU-ZA5bHAprowTl8IlZ0XzCiMw6RQeU",
    authDomain: "abubassam.firebaseapp.com",
    databaseURL: "https://abubassam-default-rtdb.firebaseio.com",
    projectId: "abubassam",
    storageBucket: "abubassam.firebasestorage.app",
    messagingSenderId: "444903609148",
    appId: "1:444903609148:web:c026e30ae08a78de2e4439"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const auth = getAuth(app);


export {
    database,
    auth
};