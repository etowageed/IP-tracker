const inputField = document.getElementById("IPaddress");
const button = document.getElementById("cta");
const mapContainer = document.getElementById("map-container");

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
