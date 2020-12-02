class Ej7{
    constructor(){
    // Tarea 1:
$(document).ready(function(){
    $("#OcultarMujeres").click(function(){
        var table = document.getElementById("programadores");
        for (var i = 0, row; row = table.rows[i]; i++) 
            if (table.rows[i].cells[1].textContent=="Mujer")
                $("#" + i).hide();
    })

    $("#OcultarHombres").click(function(){
        var table = document.getElementById("programadores");
        for (var i = 0, row; row = table.rows[i]; i++) 
            if (table.rows[i].cells[1].textContent=="Hombre")
                $("#" + i).hide();
    })

    $("#MostrarProgramadores").click(function(){
        var table = document.getElementById("programadores");
        for (var i = 0, row; row = table.rows[i]; i++) 
            $("#" + i).show();
    })

    $("#MostrarTiemposEjecucion").click(function(){
        var table = document.getElementById("tiempos");
        for (var i = 0, row; row = table.rows[i]; i++) 
            $("#" + i).show();
    })

    $("#MostrarTiempos").click(function(){
        var table = document.getElementById("tiempos");
        for (var i = 0, row; row = table.rows[i]; i++) 
            $("#t" + i).show();
    })

    $("#MostrarTiemposConError").click(function(){
        var table = document.getElementById("tiempos");
        for (var i = 0, row; row = table.rows[i]; i++) 
            if (parseInt(table.rows[i].cells[0].textContent.split(":")[0])>1 || 
                (parseInt(table.rows[i].cells[0].textContent.split(":")[0])==1 &&
                parseInt(table.rows[i].cells[0].textContent.split(":")[1])>0))
                    $("#t" + i).hide(); //oculta erróneos
            else
                $("#t" + i).show();
    })

    $("#MostrarTiemposSinError").click(function(){
        var table = document.getElementById("tiempos");
        for (var i = 0, row; row = table.rows[i]; i++) 
            if (parseInt(table.rows[i].cells[0].textContent.split(":")[0])>1 || 
                (parseInt(table.rows[i].cells[0].textContent.split(":")[0])==1 &&
                parseInt(table.rows[i].cells[0].textContent.split(":")[1])>0))
                    $("#t" + i).show();
            else
                $("#t" + i).hide();
    })

    // Tarea 3:
    $("#saluda").click(function(){
        var texto= $("<p class='pRosa'></p>").text("¡¡Hola!!");
        $("#saluda").after(texto); 
    });

    // Tarea 4:
    $("#eliminaSaludo").click(function(){
        $(".pRosa").remove(); 
    });

    // Tarea 5:
    $("#recorridoValores").click(function(){
        recorridoValores(); 
    });

    // Tarea 6:
    $("#suma").click(function(){
        var table = document.getElementById("numeros"); 
        var resultado = 0;
        for (var i = 0, row; row = table.rows[i]; i++) 
             for (var j = 0, col; col = row.cells[j]; j++) 
                resultado += parseInt(table.rows[i].cells[j].innerHTML);
        $("#resultado").val(resultado);
    });
});
    }

// Tarea 2:
modificarTitulo(){
    var tituloAnterior = $("#tituloH2").text();
    $("#tituloH2").text($("#modificaTitulo").val());
    alert("- Título anterior: " + tituloAnterior + "\n- Título modificado: " + $("#tituloH2").text());
    $("#modificaTitulo").val("");
}
modificarParrafo(){
    var parrafoAnterior = $("#parrafo").text();
    $("#parrafo").text($("#modificaParrafo").val());
    alert("- Párrafo anterior: " + parrafoAnterior + "\n- Párrafo modificado: " + $("#parrafo").text());
    $("#modificaParrafo").val("");
}

// Tarea 5:
recorridoValores(){
    $("*", document.body).each(function() {
        var etiquetaPadre = $(this).parent().get(0).tagName;
        $(this).after(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +">"));
    });
}
}

var ej7 = new Ej7();