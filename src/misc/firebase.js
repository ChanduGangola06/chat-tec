import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBy86ZSFs8tpmhdGFMzEhUjgUpULs63KvA',
  authDomain: 'chat-tec-9132c.firebaseapp.com',
  databaseURL:
    'https://chat-tec-9132c-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-tec-9132c',
  storageBucket: 'chat-tec-9132c.appspot.com',
  messagingSenderId: '969081644110',
  appId: '1:969081644110:web:b038de6ea2494c2d50cf1f',
  measurementId: 'G-YY3TZJ1M48',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();

export const database = app.database();

export const storage = app.storage();
