var markers = [];
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.725862, lng: -155.06906},
    zoom: 17
  });
  // setMarkers(map);
}
// function setMarkers(map) {
//   var i = 0;
//   console.log('In setMarkers: ' + pokestops.length);
//   pokestops.forEach(function (pokestop) {
//     var pokestopMarker = new google.maps.Marker({
//       position: pokestop.position,
//       map: map,
//       title: pokestop.title,
//       icon: 'img/pokestop-marker.png',
//       animation: google.maps.Animation.DROP,
//       id: i
//     });
//     markers.push(pokestopMarker);
//   });
//   gyms.forEach(function (gym) {
//     var gymMarker = new google.maps.Marker({
//       position: gym.position,
//       map: map,
//       title: gym.title,
//       icon: 'img/gym-marker.png',
//       animation: google.maps.Animation.DROP,
//       id: i
//     });
//     i++;
//     markers.push(gymMarker);
//   });
// }
