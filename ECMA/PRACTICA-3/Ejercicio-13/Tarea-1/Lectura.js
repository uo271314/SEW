"use strict";
class Lectura{
    constructor(){
        if (window.File && window.FileReader && window.FileList && window.Blob) 
        {  
            //El navegador soporta el API File
            document.write("<p>Este navegador soporta el API File </p>");
        }
        else document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
    }

leerArchivoKml(files) 
{ 
    var archivo = files[0];
    var coordenadas = "";
    //Solamente admite archivos de tipo texto
    var lector = new FileReader();
    lector.onload = function (evento) {
        var texto = lector.result;
        var trozos = texto.split("<coordinates>");

        for (var i=1; i<trozos.length; i++){
            var partes = trozos[i].split("\r\n\t\t\t\t");
            for (var j=1; j<partes.length; j++){
                var a = partes[j].split(",");
                coordenadas += a[1] + "," + a[0] +"\n";
            }
        }
        var areaVisualizacion = document.getElementById("coord");
        areaVisualizacion.innerText = coordenadas; 
    }
    lector.readAsText(archivo); 
};
}
var lectura = new Lectura();

