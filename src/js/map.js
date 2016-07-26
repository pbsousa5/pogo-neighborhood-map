var initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.725862, lng: -155.06906},
    zoom: 17
  });
  updateFirebaseData(map);
};
var setMarker = function (map, location) {
  var icon = '';
  switch (location.type) {
    case 'pokestop':
      icon = 'img/pokestop-marker.png';
      break;
    case 'gym':
      icon = 'img/gym-marker.png';
      break;
    default:
      console.log('ERROR: ' + location.type + ' does not have an icon assigned');
  }
  var marker = new google.maps.Marker({
    position: {lat: location.lat, lng: location.lng},
    map: map,
    icon: icon,
    title: location.title,
    animation: google.maps.Animation.DROP,
  });
};
