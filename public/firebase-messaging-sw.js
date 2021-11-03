/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyBy86ZSFs8tpmhdGFMzEhUjgUpULs63KvA',
  authDomain: 'chat-tec-9132c.firebaseapp.com',
  databaseURL:
    'https://chat-tec-9132c-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-tec-9132c',
  storageBucket: 'chat-tec-9132c.appspot.com',
  messagingSenderId: '969081644110',
  appId: '1:969081644110:web:b038de6ea2494c2d50cf1f',
  measurementId: 'G-YY3TZJ1M48',
});

firebase.messaging();
