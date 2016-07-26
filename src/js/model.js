// Arrays to hold firebase data
var pokestops = [];
var gyms = [];

var updateFirebaseData = function (map) {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0LhmulK6Hrn-m-gfhj3XFNUq2OgfEmzg",
    authDomain: "pogo-63931.firebaseapp.com",
    databaseURL: "https://pogo-63931.firebaseio.com",
  };
  firebase.initializeApp(config);

  // Firebase variables
  var db = firebase.database();
  var locationsRef = db.ref('/');

  // Push data from firebase into arrays
  locationsRef.on('child_added', function(snap) {
    var location = snap.val();
    switch (location.type) {
      case 'pokestop':
        pokestops.push(location);
        break;
      case 'gym':
        gyms.push(location);
        break;
      default:
        console.log('ERROR: Unrecognized location type');
        break;
    }
    setMarker(map, location);
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });
};
