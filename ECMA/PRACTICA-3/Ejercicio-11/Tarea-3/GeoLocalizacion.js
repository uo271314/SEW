"use strict";
class GeoLocalizacion {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }
    getPosicion(posicion){
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;   
    }
    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }
    getLongitud(){
        return this.longitud;
    }
    getLatitud(){
        return this.latitud;
    }
    getAltitud(){
        return this.altitud;
    }
    verTodo(dondeVerlo){
        var ubicacion=document.getElementById(dondeVerlo);
        var datos='<p class="msg">'+ this.mensaje + '</p>'; 
        if(this.longitud != null)
            datos+='<p>Longitud: '+this.longitud +' grados</p>'; 
        else
            datos+='<p>No se ha podido obtener la longitud</p>'; 
        if(this.latitud != null)
            datos+='<p>Latitud: '+this.latitud +' grados</p>';
        else
            datos+='<p>No se ha podido obtener la latitud</p>';
        if(this.precision != null)
            datos+='<p>Precisión de la longitud y latitud: '+ this.precision +' metros</p>';
        else
            datos+='<p>No se ha podido obtener la precisión de la longitud y latitud</p>';
        if(this.altitude != null)
            datos+='<p>Altitud: '+ this.altitude +' metros</p>';
        else
            datos+='<p>No se ha podido obtener la altitud</p>';
        if(this.precisionAltitud != null)
            datos+='<p>Precisión de la altitud: '+ this.precisionAltitud +' metros</p>'; 
        else
            datos+='<p>No se ha podido obtener la precisión de la altitud</p>'; 
        if(this.rumbo != null)
            datos+='<p>Rumbo: '+ this.rumbo +' grados</p>'; 
        else
            datos+='<p>No se ha podido obtener el rumbo</p>'; 
        if(this.velocidad != null)
            datos+='<p>Velocidad: '+ this.velocidad +' metros/segundo</p>';
        else
            datos+='<p>No se ha podido obtener la velocidad</p>';
        ubicacion.innerHTML = datos;
    }

    getMapaEstaticoGoogle(dondeVerlo){
        var ubicacion=document.getElementById(dondeVerlo);
        if (this.latitud != null && this.longitud != null){
            var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
            var url = "https://maps.googleapis.com/maps/api/staticmap?";
            var centro = "center=" + this.latitud + "," + this.longitud;
            var zoom ="&zoom=15";
            var tamaño= "&size=500x500";
            var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
            var sensor = "&sensor=false"; 
        
            this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
            ubicacion.innerHTML = "<img src='"+this.imagenMapa+"'/>";
        }
        else
            ubicacion.innerHTML = "<p class='msg'>" + this.mensaje + "</p>";
    }
}
var miPosicion = new GeoLocalizacion();