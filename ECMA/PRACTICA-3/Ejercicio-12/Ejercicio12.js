"use strict";
  
class Ej12{
  constructor(){
    if (window.File && window.FileReader && window.FileList && window.Blob) 
 {  
     //El navegador soporta el API File
     document.write("<p>Este navegador soporta el API File </p>");
 }
    else document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
  }

calcularTamañoArchivos() {
  document.getElementById("areaTexto").innerText = "";
  var nBytes = 0,
      archivos = document.getElementById("subirArchivos").files,
      nArchivos = archivos.length;
  for (var i = 0; i < nArchivos; i++) {
    nBytes += archivos[i].size;
  }
  var nombresTiposTamaños="";
  for (var i = 0; i < nArchivos; i++) {
    nombresTiposTamaños += "<div id='archivos'>";
    nombresTiposTamaños += "<p>Archivo[" + i +"] = "+ archivos[i].name  + " Tamaño: " + archivos[i].size +" bytes " + "</p>" ;
    nombresTiposTamaños += "<p>Tipo: " +  archivos[i].type +"</p>";
    nombresTiposTamaños += "<p>Fecha de la última modificación: " + archivos[i].lastModifiedDate +"</p>";
    nombresTiposTamaños += "</div>";
    
    var tipoTexto = /text.*/;
    var areaVisualizacion = document.getElementById("areaTexto");
    if (archivos[i].type.match(tipoTexto)) {
        var lector = new FileReader();
        lector.onload = function (evento) {
          areaVisualizacion.innerText +=  evento.target.result;
          areaVisualizacion.innerHTML += "<br>";
          areaVisualizacion.innerHTML += "<p>------------------------------------------------------------------------------------------</p>";
          areaVisualizacion.innerHTML += "<br>";
        }      
        lector.readAsText(archivos[i]);
    }
    else {
        tipoTexto = "application/json";
        if (archivos[i].type.match(tipoTexto)) {
          var lector = new FileReader();
          lector.onload = function (evento) {
            var contenido = evento.target.result;
            areaVisualizacion.innerHTML += contenido;
            areaVisualizacion.innerHTML += "<br>";
            areaVisualizacion.innerHTML += "<p>------------------------------------------------------------------------------------------</p>";
            areaVisualizacion.innerHTML += "<br>";
          }      
          lector.readAsText(archivos[i]);
        }
        else {
          errorArchivo.innerText = "Error : ¡¡¡ Archivo no válido !!!";
        } 
    }    
  }
  
  document.getElementById("numero").innerHTML = nArchivos;
  document.getElementById("tamaño").innerHTML = nBytes + " bytes";
  document.getElementById("nombres").innerHTML = nombresTiposTamaños;
}
}
var ej12 = new Ej12();