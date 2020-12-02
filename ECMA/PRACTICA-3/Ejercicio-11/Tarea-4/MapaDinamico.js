"use strict";
var mapaDinamicoGoogle = new Object();

class Mapa{
initMap(){
    var villaviciosa = {lat: 43.4814, lng: -5.43535};
    var mapa = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:villaviciosa});
    var marcador = new google.maps.Marker({position:villaviciosa,map:mapa});
}
}
var a = new Mapa();
mapaDinamicoGoogle.initMap = a.initMap;
