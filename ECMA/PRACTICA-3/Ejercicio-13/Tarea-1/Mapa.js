"use strict";
var miMapa = new Object();

class Mapa{
initMap(){  
    var Leon = new google.maps.Marker({
        position: {lat: 42.595374, lng: -5.581578},
        draggable: false
    });
    var centro = Leon.position;
    var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'),{
        zoom: 7,
        center:centro,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var Cistierna = new google.maps.Marker({
        position: {lat: 42.803160, lng: -5.130800},
        draggable: false
    });
    var VillasanaDeMena = new google.maps.Marker({
        position: {lat: 43.100600, lng: -3.283462},
        draggable: false
    });
    var Bilbao = new google.maps.Marker({
        position: {lat: 43.260419, lng: -2.949174},
        draggable: false
    });
    var Santander = new google.maps.Marker({
        position: {lat: 43.459325, lng: -3.809720},
        draggable: false
    });
    Leon.setMap(mapaGeoposicionado);
    Cistierna.setMap(mapaGeoposicionado);
    VillasanaDeMena.setMap(mapaGeoposicionado);
    Bilbao.setMap(mapaGeoposicionado);
    Santander.setMap(mapaGeoposicionado);
    
    var infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Usted está aquí');
            infoWindow.open(mapaGeoposicionado);
            mapaGeoposicionado.setCenter(pos);
            
          }, function() {
            handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
        }
      }

      handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: Ha fallado la geolocalización' :
                              'Error: Su navegador no soporta geolocalización');
        infoWindow.open(mapaGeoposicionado);
      }
    }
var a = new Mapa();
miMapa.initMap = a.initMap;