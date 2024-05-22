function geoLocalization() {
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat, long);
  });
}
