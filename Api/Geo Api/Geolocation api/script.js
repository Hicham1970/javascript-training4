let getLoc = document.getElementById("Geolocation");
let mapHolder = document.getElementById("mapHolder");
getLoc.addEventListener("click", (event) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude, longitude);
        coords.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
        // Show a map centered at latitude / longitude.
        mapHolder.innerHTML =
          '<iframe width="100vh" height = "600" src="https://maps.google.com/maps?q=' +
          latitude +
          "," +
          longitude +
          '&amp;z=15&amp;output=embed"></iframe>';
      },
      (error) => {
        coords.innerHTML = "Permission denied by the user!" + error.code;
      }
    );
  } else {
    document.getElementById("demo").innerHTML =
      "Geolocation is not supported by this browser.";
  }
});

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     document.getElementById("demo").innerHTML =
//       "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   document.getElementById("demo").innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br>Longitude: " +
//     position.coords.longitude;
// }
