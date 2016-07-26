// Initialize Firebase
var config = {
  apiKey: "AIzaSyD0LhmulK6Hrn-m-gfhj3XFNUq2OgfEmzg",
  authDomain: "pogo-63931.firebaseapp.com",
  databaseURL: "https://pogo-63931.firebaseio.com",
};
firebase.initializeApp(config);

// Firebase variables
var db = firebase.database();
var pokestopsRef = db.ref('pokestops');
var gymsRef = db.ref('gyms');
