class Ej10{
    constructor(){
            this.actualiza();
    }

    actualiza() {
    $("#ref").empty();
    $("#ref").append("<h2>Fotos equipo:</h2>");
    $("#emblematico").empty();
    $("#Zona").text(this.getZona());
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickrAPI, 
            {
                tags: this.getRadioButtonSelectedValue(),
                tagmode: "any",
                format: "json"
            })
        .done(function(data) {
                $.each(data.items, function(i,item ) {
                    $("<img>").attr( "src", item.media.m).appendTo( "#ref" );
                    if ( i === 20 ) {
                            return false;
                            }
                });
    });
    $.getJSON(flickrAPI, 
        {
            tags: this.getEmblematico(),
            tagmode: "any",
            format: "json"
        })
    .done(function(data) {
        $("<img>").attr( "src", data.items[0].media.m).appendTo( "#emblematico" );
});
}

getRadioButtonSelectedValue(){
    var ctrl = document.getElementsByName("equipo");
    for(var i=0; i<ctrl.length; i++)
        if(ctrl[i].checked)
            return ctrl[i].value;
}

getEmblematico(){
    if(this.getRadioButtonSelectedValue() == "Sporting de Gijón")
        return "Cimadevilla";
    if(this.getRadioButtonSelectedValue() == "Real Oviedo")
        return "Catedral Oviedo";
    if(this.getRadioButtonSelectedValue() == "cd Lealtad")
        return "Valdedios";
}

getZona(){
    if(this.getRadioButtonSelectedValue() == "Sporting de Gijón")
        return "Gijón";
    if(this.getRadioButtonSelectedValue() == "Real Oviedo")
        return "Oviedo";
    if(this.getRadioButtonSelectedValue() == "cd Lealtad")
        return "Villaviciosa";
}
}

var ej10 = new Ej10();