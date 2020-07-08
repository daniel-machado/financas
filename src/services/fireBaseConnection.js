import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCGr-bb-2Db3X7kzFZp1vQntIHOF7r1H78",
    authDomain: "financas-89632.firebaseapp.com",
    databaseURL: "https://financas-89632.firebaseio.com",
    projectId: "financas-89632",
    storageBucket: "financas-89632.appspot.com",
    messagingSenderId: "342246824109",
    appId: "1:342246824109:web:be5613c54219a4f4eace24"
  };
  // Initialize Firebase
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig); 
    }
    
export default firebase;