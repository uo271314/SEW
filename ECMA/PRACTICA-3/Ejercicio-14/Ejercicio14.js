"use strict";

class Imagen{
    constructor(){
            this.actualiza();
    }

    actualiza() {
    $("#ref").empty();
    $("#ref").append("<h3>Foto de la zona:</h3>");
    $("#emblematico").empty();
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickrAPI, 
            {
                tags: this.getFoto(),
                tagmode: "any",
                format: "json"
            })
        .done(function(data) {
                $.each(data.items, function(i,item ) {
                    $("<img>").attr( "src", item.media.m).appendTo( "#ref" );
                    if ( i === 0 ) {
                            return false;
                            }
                });
    });
}

getRadioButtonSelectedValue(){
    var ctrl = document.getElementsByName("sitio");
    for(var i=0; i<ctrl.length; i++)
        if(ctrl[i].checked)
            return ctrl[i].value;
}

getFoto(){
    if(this.getRadioButtonSelectedValue() == "Gijón")
        return "Cimadevilla";
    if(this.getRadioButtonSelectedValue() == "Oviedo")
        return "Catedral Oviedo";
    if(this.getRadioButtonSelectedValue() == "Villaviciosa")
        return "Valdedios";
    if(this.getRadioButtonSelectedValue() == "Avilés")
        return "Sabugo";
}
}

var imagen = new Imagen();


var miMapa = new Object();
class Mapa{
  constructor(){
    $( function() {
      $( "#sortable" ).sortable({
        revert: true
      });
      $( "#draggable" ).draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
      });
      $( "ul, li" ).disableSelection();
    } );
  }
initMap(){  

    var Villaviciosa = new google.maps.Marker({
        position: {lat: 43.4814, lng: -5.43535},
        draggable: false
    });
    var Gijón = new google.maps.Marker({
        position: {lat: 43.5453, lng: -5.66193},
        draggable: false
    });
    var centro = Gijón.position;
    var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'),{
        zoom: 10,
        center:centro,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var Oviedo = new google.maps.Marker({
        position: {lat: 43.36029, lng: -5.84476},
        draggable: false
    });
    var Avilés = new google.maps.Marker({
        position: {lat: 43.5558, lng: -5.92762},
        draggable: false
    });
    Villaviciosa.setMap(mapaGeoposicionado);
    Oviedo.setMap(mapaGeoposicionado);
    Gijón.setMap(mapaGeoposicionado);
    Avilés.setMap(mapaGeoposicionado);
    
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



