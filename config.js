import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAFNU7nnQnfq7SPZjPHleBfz8E7isPONXs",
    authDomain: "pro-c71-d1147.firebaseapp.com",
    projectId: "pro-c71-d1147",
    storageBucket: "pro-c71-d1147.appspot.com",
    messagingSenderId: "849762244716",
    appId: "1:849762244716:web:55f2b8f21e4822771aa049"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


