// let https = require("https");

let url =
  "https://api.ip2location.io/?key=D34157C6E677FA6658B5C72002B5E7F7&ip=165.225.93.36&format=json";
let div = document.getElementById("app");
let response = "";
let req = https.get(url, function (res) {
  res.on("data", (chunk) => (response += chunk));
  res.on("end", function () {
    let data = JSON.parse(response);
    // div.innerHTML = JSON.stringify(data);
    div.innerHTML = `
     <h1>${data.country_name}</h1>
     <p>IP: ${data.ip}</p>
     <p>Latitude: ${data.latitude}</p>
`;
  });
});
