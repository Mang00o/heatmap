//definiamo le variabili latitudine e longitudine per alcune citta'
var latLngPadova = L.latLng(45.406434, 11.876761);
var latLngVenezia = L.latLng(45.440847, 12.315515);
var latLngVicenza = L.latLng(45.545479, 11.535421);
var latLngTreviso = L.latLng(45.666916, 12.243065);
var latLngSpazioDev = L.latLng(45.622198, 11.839179); // Coordinate di SpazioDev

/******** DEFINIAMO DUE LIVELLI ********/
//primo livello base
var baseMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
});

//secondo livello overlay
//definisce marker delle citta''
var padova  = L.marker(latLngPadova).bindPopup('This is Padova, Italy.'),
    venezia = L.marker(latLngVenezia).bindPopup('This is Venezia, Italy.'),
    vicenza = L.marker(latLngVicenza).bindPopup('This is Vicenza, Italy.'),
    treviso = L.marker(latLngTreviso).bindPopup('This is Treviso, Italy.'),
    spaziodev = L.marker(latLngSpazioDev).bindPopup('This is SpazioDev.');

//aggiunge i marker ad un layer cities
var cities = L.layerGroup([padova, venezia, vicenza, treviso, spaziodev]);

/******** DEFINIAMO LA MAPPA ********/
//dichiariamo la mappa
var map = L.map('map', {
  center: latLngSpazioDev, //dovrebbero essere latitudine e longitudine di spazioDev
  zoom: 10,
  layers: [baseMap, cities] //insieriamo 2 layer: osm come base e cities come layer superiore
});

//definisce mappa di base
var baseLayer = {
  "StreetMap": baseMap,
};

//definisce mappa in overlay
var overlayLayer = {
  "Cities": cities
};

//controlla i due layer e gli aggiunge alla mappa
var layerControl = L.control.layers (baseLayer, overlayLayer).addTo(map);


//layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
//layerControl.addOverlay(parks, "Parks");

