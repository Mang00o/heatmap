var latLngSpazioDev = L.latLng(45.622198, 11.839179);

/******** DEFINIAMO DUE LIVELLI ********/
//primo livello base
var baseMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
});

//secondo livello overlay
//definisce marker in 4 citta'
var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

//aggiunge i marker ad un layer cities
var cities = L.layerGroup([littleton, denver, aurora, golden]);

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

