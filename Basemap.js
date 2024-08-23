var latLngSpazioDev = L.latLng(45.622198, 11.839179);

var map = L.map('map').setView(latLngSpazioDev, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);