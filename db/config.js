const Rebase = require('re-base');
const firebase = require('firebase');

// This is hard-coded due to re-base/syncState/Heroku issues.
// See Rob with questions
const API_KEY = 'AIzaSyC1nsBCq-D1-I3gysxeWUDfRnOGIBQNeU8';
const app = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: 'hraway-36d46.firebaseapp.com',
  databaseURL: 'https://hraway-36d46.firebaseio.com',
  projectId: 'hraway-36d46',
  storageBucket: 'hraway-36d46.appspot.com',
  messagingSenderId: '802087692134'
});

const db = Rebase.createClass(app.database());

module.exports = db;
