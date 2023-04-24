let inputField = document.getElementById("addIP").value;
const button = document.getElementById("cta");
const mapContainer = document.getElementById("map-container");
let iPnum = document.getElementById("iPnum");
let iPloc = document.getElementById("iPloc");
let iPtim = document.getElementById("iPtim");
let iPisp = document.getElementById("iPisp");

const geedMap = L.map("map-container").setView([6.465422, 3.406448], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZ2VlZDAxIiwiYSI6ImNrc3o2Y21hczJxcGEycXRmY243MWdxa3cifQ.OH12Z9qYxBhjrfNQDQZxog",
  }
).addTo(geedMap);

const marker = L.marker([6.465422, 3.406448]).addTo(geedMap);

const getIPaddress = () => {
  fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_Dl2AhbN2E9TFBuUCQVKBAbDtqnCx3&ipAddress=+${inputField}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      iPnum.innerText = data.ip;
      iPloc.innerText = data.location.country;
      iPtim.innerText = data.location.timezone;
      iPisp.innerText = data.isp;
    })
    .catch((error) => {
      console.log("this error");
    });

  inputField = "";
};

getIPaddress();
