class Meteo{
    constructor(obj){
        objMeteo = obj;
        this.cargarDatos();
    }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: objMeteo.url,
            method: 'GET',
            success: function(data){
                objMeteo.datos = data;
                $("pre").text(JSON.stringify(objMeteo.datos, null, 2));
                var stringDatos = "<h2>Datos</h2>";
                stringDatos += "<div id='ciu'>";
                stringDatos += "<p>Ciudad: " + objMeteo.datos.name + "</p>";
                stringDatos += "<p>País: " + objMeteo.datos.sys.country + "</p>";
                stringDatos += "<p>Latitud: " + objMeteo.datos.coord.lat + " grados</p>";
                stringDatos += "<p>Longitud: " + objMeteo.datos.coord.lon + " grados</p>";
                stringDatos += "</div>";

                stringDatos += "<section id='punteado'>";
                stringDatos += "<div id='temp' class='linea'>";
                stringDatos += "<p>Temperatura: " + objMeteo.datos.main.temp + " grados Celsius</p>";
                stringDatos += "<p>Temperatura máxima: " + objMeteo.datos.main.temp_max + " grados Celsius</p>";
                stringDatos += "<p>Temperatura mínima: " + objMeteo.datos.main.temp_min + " grados Celsius</p>";
                stringDatos += "</div>"

                stringDatos += "<div id='info' class='linea'>";
                stringDatos += "<p>Presión: " + objMeteo.datos.main.pressure + " milímetros</p>";
                stringDatos += "<p>Humedad: " + objMeteo.datos.main.humidity + "%</p>"; 
                stringDatos += "<p>Visibilidad: " + objMeteo.datos.visibility + " metros</p>";
                stringDatos += "<p>Nubosidad: " + objMeteo.datos.clouds.all + " %</p>";    
                stringDatos += "</div>";  

                stringDatos += "<div id='sol' class='linea'>";
                stringDatos += "<p>Amanece a las: " + new Date(objMeteo.datos.sys.sunrise *1000).toLocaleTimeString() + "</p>"; 
                stringDatos += "<p>Oscurece a las: " + new Date(objMeteo.datos.sys.sunset *1000).toLocaleTimeString() + "</p>"; 
                stringDatos += "</div>";

                stringDatos += "<div id='viento' class='linea'>";
                stringDatos += "<p>Dirección del viento: " + objMeteo.datos.wind.deg + "  grados</p>";
                stringDatos += "<p>Velocidad del viento: " + objMeteo.datos.wind.speed + " metros/segundo</p>";
                stringDatos += "</div>";
                stringDatos += "</section>";

                stringDatos += "<div class='tomado'>";
                stringDatos += "<p>Hora de la medida: " + new Date(objMeteo.datos.dt *1000).toLocaleTimeString() + "</p>";
                stringDatos += "</div>";
                stringDatos += "<div class='tomado'>";
                stringDatos += "<p>Fecha de la medida: " + new Date(objMeteo.datos.dt *1000).toLocaleDateString() + "</p>";
                stringDatos += "</div>";

                stringDatos += "<p id='pieImg'>" + objMeteo.datos.weather[0].description + "</p>";
                var iconurl = "http://openweathermap.org/img/w/" + objMeteo.datos.weather[0].icon + ".png";
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
var meteoLleida = new Object();
meteoLleida.apikey = "47b790fd0fc41878c80c57c9846132cb";
meteoLleida.ciudad = "Lleida";
meteoLleida.unidades = "&units=metric";
meteoLleida.idioma = "&lang=es";
meteoLleida.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteoLleida.ciudad + meteoLleida.unidades + meteoLleida.idioma + "&APPID=" + meteoLleida.apikey;
meteoLleida.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";  

var meteoCellers = Object.assign({},meteoLleida);
meteoCellers.ciudad = "Cellers";
meteoCellers.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteoCellers.ciudad + meteoCellers.unidades + meteoCellers.idioma + "&APPID=" + meteoCellers.apikey;

var meteoTremp = Object.assign({},meteoLleida);
meteoTremp.ciudad = "Tremp"
meteoTremp.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteoTremp.ciudad + meteoTremp.unidades + meteoTremp.idioma + "&APPID=" + meteoTremp.apikey;

