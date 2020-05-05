var start_pos = [30, 0]

var map = L.map( 'map', {
    center: start_pos,
    minZoom: 2,
    zoom: 2,
    //crs: L.CRS.EPSG4326
});

var stvi = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );

$.get("http://127.0.0.1:5000/places", function(data){
    for (property in data) {
        var marker = L.marker(data[property]).addTo(map);
        marker.bindPopup(property)
        }
    },
    dataType="json"
    );
