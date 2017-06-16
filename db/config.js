var Rebase = require('re-base');
var firebase = require('firebase');
var API_KEY = require('./config.keys.js');

var app = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: "hraway-36d46.firebaseapp.com",
  databaseURL: "https://hraway-36d46.firebaseio.com",
  projectId: "hraway-36d46",
  storageBucket: "hraway-36d46.appspot.com",
  messagingSenderId: "802087692134"
});

var db = Rebase.createClass(app.database());

module.exports = db;
