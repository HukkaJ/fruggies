import { initializeApp } from 'firebase/app'
import { orderBy, query, onSnapshot, querySnapshot, getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { ReactNativeAsyncStorage } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "xx",
  authDomain: "xxx",
  projectId: "xx",
  storageBucket: "xx",
  messagingSenderId: "xx",
  appId: "xx"
  }; 
  
  initializeApp(firebaseConfig);

  const firebaseApp = initializeApp(firebaseConfig); 
  const auth = getAuth(firebaseApp); 

  const firestrore = getFirestore();
  const USERS = 'users';
  

  export {
    ReactNativeAsyncStorage,
    AsyncStorage, 
    firebaseApp,
    auth,
    signInWithEmailAndPassword,
    firestrore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    querySnapshot,
    orderBy,
    USERS
  };

  console.log("Firebase toimii")
