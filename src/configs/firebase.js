import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDypiscEcVrIiMGxhaMIzAzWH1O2epw6v0',
  authDomain: 'belgia-shop.firebaseapp.com',
  projectId: 'belgia-shop',
  storageBucket: 'belgia-shop.appspot.com',
  messagingSenderId: '694539240372',
  appId: '1:694539240372:web:7fca35b378911e202368e1',
  measurementId: 'G-5BZ59MHTK7',
};

let firebse = '';
if (!firebase.apps.length) {
  firebse = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebse;
