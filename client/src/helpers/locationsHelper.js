// const google = require('google');
// // const maps = require('maps');

// const geocoder = new window.google.maps.Geocoder();


// const getCurrentLocation = (done) => async () => {
//   const res = await navigator.getCurrentAddress();
//   console.log(res);
//   if (res) {
//     done(null, res);
//   } else {
//     done(null, null);
//   }
// };

// const getCurrentAddress = (done) => async () => {
//   console.log('lalala');
//   const { latitude, longitude } = getCurrentLocation();
//   const latlng = { latitude, longitude };
//   const currentAddress = await geocoder.geocode({ location: latlng });
//   if (currentAddress) {
//     done(null, currentAddress);
//   } else {
//     done(null, null);
//   }
// };

// module.exports = getCurrentAddress();
