const Rebase = require('re-base');
const firebase = require('firebase');
// const app;

// console.log('PROCESS.ENV IS: ', process.env);
// console.log('firebaseAPI_KEY is: ', process.env.firebaseAPI_KEY);

const API_KEY = 'AIzaSyC1nsBCq-D1-I3gysxeWUDfRnOGIBQNeU8';
// const API_KEY = process.env.FIREBASE_API_KEY;
// console.log('API_KEY is now: ', API_KEY);

// if ( API_KEY ) {
const app = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: 'hraway-36d46.firebaseapp.com',
  databaseURL: 'https://hraway-36d46.firebaseio.com',
  projectId: 'hraway-36d46',
  storageBucket: 'hraway-36d46.appspot.com',
  messagingSenderId: '802087692134'
});
// } else {
//   API_KEY = require('./config.keys.js');
//   app = firebase.initializeApp({
//     apiKey: API_KEY,
//     authDomain: "hraway-36d46.firebaseapp.com",
//     databaseURL: "https://hraway-36d46.firebaseio.com",
//     projectId: "hraway-36d46",
//     storageBucket: "hraway-36d46.appspot.com",
//     messagingSenderId: "802087692134"
//   });
// }

const db = Rebase.createClass(app.database());

module.exports = db;
