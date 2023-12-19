var map = L.map('map').setView([48.866667, 2.333333], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    minZoom: 7,
    //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if(xmlhttp.readyState = 4){
        if(xmlhttp.status = 200){
            //fichier geojson chargé
            let geojson = JSON.parse(xmlhttp.responseText);
            let geojsonlayer = L.geoJSON(geojson, {
                style: {
                    "color": "red", // Changement de la couleur de base en rouge
                    "opacity": 1,
                    "fillColor": "red", // Changement de la couleur de base en rouge
                    "fillOpacity": 0.2
                },
                onEachFeature: function(feature, layer) {
                    layer.bindPopup(feature.properties.name);
                    layer.on('mouseover', function(e) {
                        this.openPopup();     
                    });
                }
            }).addTo(map);
            
            
        }else{
            console.log(xmlhttp.statusText);
        }
    }
}


xmlhttp.open("GET", "json/CommunesBasseTerre.geojson", true);
xmlhttp.send(null);

