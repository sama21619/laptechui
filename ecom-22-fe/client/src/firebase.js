import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBNMC17eNIBnsavHMsHCX-V8re4G6fTh4I",
    authDomain: "laptech-tieuluanchuyennganh.firebaseapp.com",
    projectId: "laptech-tieuluanchuyennganh",
    storageBucket: "laptech-tieuluanchuyennganh.appspot.com",
    messagingSenderId: "1035441403935",
    appId: "1:1035441403935:web:858dd95b64e36a49ccbd2a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
