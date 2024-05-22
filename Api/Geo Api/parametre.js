// here is an example of how to use the getCurrentPosition() method:

navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(
      `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
    );
  },
  function (error) {
    console.error(`Error: ${error.message}`);
  },
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }
);
