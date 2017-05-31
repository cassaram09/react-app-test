// import { Promise } from 'es6-promise';
// import { google } from 'react-google-maps';
// import { findDOMNode } from 'react-dom';

// function codeAddress(address) {
//   return new Promise(function(resolve, reject){
//     var geocoder = new google.maps.Geocoder();
//     geocoder.geocode( { 'address' : address }, function( results, status ) {
//       if( status == google.maps.GeocoderStatus.OK ) {
//         resolve( results )
//       } else {
//         reject( 'Geocode was not successful for the following reason: ' + status  )
//       }
//     });
//   });
// }

// function createMap(coordinates) {
//   // var map = new google.maps.Map($('#googlemap')[0], {
//   //   zoom: 17,
//   //   center: coordinates,
//   //   zoomControl: true,
//   //   mapTypeControl: false,
//   //   scaleControl: false,
//   //   streetViewControl: false,
//   //   rotateControl: false,
//   //   fullscreenControl: false,
//   //   draggable: true,
//   //   scrollwheel: false
//   // });
//   // var marker = new google.maps.Marker({
//   //   position: coordinates,
//   //   map: map
//   // });  
// }

// function parseCoordinates(response){
//   // return coordinates = {
//   //   lat: response[0].geometry.location.lat(), 
//   //   lng: response[0].geometry.location.lng()
//   // }
// }

// function initializeMap(address){
//   codeAddress(address).then(function(response){
//     var coordinates = parseCoordinates(response);
//     createMap(coordinates);
//   })
// }

// export default {
//   codeAddress,
//   createMap,
//   parseCoordinates,
//   initializeMap
// }