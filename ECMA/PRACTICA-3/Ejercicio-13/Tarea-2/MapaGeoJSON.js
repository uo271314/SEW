"use strict"
class Mapa{
    constructor(){
    }

    procesar(files){
        var archivo = files[0];
        var mapa = new google.maps.Map(document.getElementById("map"));
        mapa.setCenter({lat: 43.2185, lng: -6.87628});
        mapa.setZoom(4);
        mapa.setMapTypeId(google.maps.MapTypeId.HYBRID);

        if(archivo.name.endsWith(".geojson")){
            var reader = new FileReader();
            reader.readAsText(archivo);
            reader.onload = function(evento){
                var geojson = JSON.parse(reader.result);
                mapa.data.addGeoJson(geojson);
            }
        }
    }
}
var mapa = new Mapa();