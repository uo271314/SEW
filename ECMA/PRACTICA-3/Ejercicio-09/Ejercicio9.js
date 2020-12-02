class Meteo{
    constructor(obj){
        objMeteo = obj;
        this.cargarDatos();
    }
    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: objMeteo.url,
            method: 'GET',
            success: function(data){
                objMeteo.datos = data;
                $("pre").text((new XMLSerializer()).serializeToString(datos));
                var stringDatos = "<h2>Datos</h2>";
                stringDatos += "<div id='ciu'>";
                stringDatos += "<p>Ciudad: " + $('city',objMeteo.datos).attr("name") + "</p>";
                stringDatos += "<p>País: " + $('country',objMeteo.datos).text() + "</p>";
                stringDatos += "<p>Latitud: " + $('coord',objMeteo.datos).attr("lat") + " grados</p>";
                stringDatos += "<p>Longitud: " + $('coord',objMeteo.datos).attr("lon") + " grados</p>";
                stringDatos += "</div>";

                stringDatos += "<section id='punteado'>";
                stringDatos += "<div id='temp' class='linea'>";
                stringDatos += "<p>Temperatura: " + $('temperature',objMeteo.datos).attr("value") + " grados Celsius</p>";
                stringDatos += "<p>Temperatura máxima: " + $('temperature',objMeteo.datos).attr("max") + " grados Celsius</p>";
                stringDatos += "<p>Temperatura mínima: " + $('temperature',objMeteo.datos).attr("min") + " grados Celsius</p>";
                stringDatos += "</div>"

                stringDatos += "<div id='info' class='linea'>";
                stringDatos += "<p>Presión: " + $('pressure',objMeteo.datos).attr("value") + " milímetros</p>";
                stringDatos += "<p>Humedad: " + $('humidity',objMeteo.datos).attr("value") + "%</p>"; 
                stringDatos += "<p>Visibilidad: " + $('visibility',objMeteo.datos).attr("value") + " metros</p>";
                stringDatos += "<p>Nubosidad: " + $('clouds',objMeteo.datos).attr("value") + " %</p>";    
                stringDatos += "</div>";  

                stringDatos += "<div id='sol' class='linea'>";
                stringDatos += "<p>Amanece a las: " + $('sun',objMeteo.datos).attr("rise") + "</p>"; 
                stringDatos += "<p>Oscurece a las: " + $('sun',objMeteo.datos).attr("set") + "</p>"; 
                stringDatos += "</div>";

                stringDatos += "<div id='viento' class='linea'>";
                stringDatos += "<p>Dirección del viento: " + $('direction',objMeteo.datos).attr("value") + "  grados</p>";
                stringDatos += "<p>Velocidad del viento: " + $('speed',objMeteo.datos).attr("value") + " metros/segundo</p>";
                stringDatos += "</div>";
                stringDatos += "</section>";

                stringDatos += "<div class='tomado'>";
                stringDatos += "<p>Hora de la medida: " + $('lastupdate',objMeteo.datos).attr("value") + "</p>";
                stringDatos += "</div>";
                stringDatos += "<div class='tomado'>";
                stringDatos += "<p>Fecha de la medida: " + (new Date(Date.parse($('lastupdate',objMeteo.datos).attr("value"))-new Date().getTimezoneOffset() * 60 * 1000)).toLocaleDateString("es-ES") + "</p>";
                stringDatos += "</div>";

                stringDatos += "<p id='pieImg'>" + objMeteo.datos.all[17].attributes[1].nodeValue + "</p>";
                var iconurl = "http://openweathermap.org/img/w/" + objMeteo.datos.all[17].attributes[2].nodeValue + ".png";
                stringDatos += "<div id='iconTiempo'><img id='wicon' src='" + iconurl +"' alt='Weather icon'></div>";
                $("#datos").html(stringDatos);
            },
            error:function(){
                document.write(objMeteo.error);    
            }
        });
    }
}
var objMeteo;
var meteoLeón = new Object();
meteoLeón.apikey = "47b790fd0fc41878c80c57c9846132cb";
meteoLeón.ciudad = "León, ES";
meteoLeón.unidades = "&units=metric";
meteoLeón.idioma = "&lang=es";
meteoLeón.tipo = "&mode=xml";
meteoLeón.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteoLeón.ciudad + meteoLeón.tipo + meteoLeón.unidades + meteoLeón.idioma + "&APPID=" + meteoLeón.apikey;
meteoLeón.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";  

var meteoCistierna = Object.assign({},meteoLeón);
meteoCistierna.ciudad = "Cistierna";
meteoCistierna.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteoCistierna.ciudad + meteoCistierna.tipo + meteoCistierna.unidades + meteoCistierna.idioma + "&APPID=" + meteoCistierna.apikey;

var meteoVillasanaDeMena = Object.assign({},meteoLeón);
meteoVillasanaDeMena.ciudad = "Villasana de Mena"
meteoVillasanaDeMena.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteoVillasanaDeMena.ciudad + meteoVillasanaDeMena.tipo + meteoVillasanaDeMena.unidades + meteoVillasanaDeMena.idioma + "&APPID=" + meteoVillasanaDeMena.apikey;

var meteoBilbao = Object.assign({},meteoLeón);
meteoBilbao.ciudad = "Bilbao"
meteoBilbao.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteoBilbao.ciudad + meteoBilbao.tipo + meteoBilbao.unidades + meteoBilbao.idioma + "&APPID=" + meteoBilbao.apikey;

var meteoSantander = Object.assign({},meteoLeón);
meteoSantander.ciudad = "Santander"
meteoSantander.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteoSantander.ciudad + meteoSantander.tipo + meteoSantander.unidades + meteoSantander.idioma + "&APPID=" + meteoSantander.apikey;