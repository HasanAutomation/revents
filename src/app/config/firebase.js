import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig={
    apiKey: "AIzaSyAu-ba8h0hVjJ6exv_uhXwvIVqDmH0XOc4",
    authDomain: "reventsfirebase-dfdc3.firebaseapp.com",
    databaseURL: "https://reventsfirebase-dfdc3.firebaseio.com",
    projectId: "reventsfirebase-dfdc3",
    storageBucket: "reventsfirebase-dfdc3.appspot.com",
    messagingSenderId: "470249867331",
    appId: "1:470249867331:web:6087fc5861d5817faa6cf6"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;