class CalculadoraCambioUnid{
    constructor(){
    }
    enter(){
        var comboDe = document.formulario.unidades;
        var comboA = document.formulario.unidadesConvertirA;
        de = comboDe.options[comboDe.selectedIndex].text;
        a = comboA.options[comboA.selectedIndex].text;
        document.getElementById("resultado").value = this.transforma(de,a);
    }
    transforma(a,b){
        var valor = document.getElementById("introduce").value;
        if (this.isNum(valor)){
            if (a=="cm"){
                if (b=="cm")
                    return valor + "cm = " + valor + "cm";
                if (b=="pulgadas(in)")
                    return valor + "cm = " + this.cadenaCortaSeisDecimales(this.cmToPulg(valor)) + "in";
                if (b=="pies(ft)")
                    return valor + "cm = " + this.cadenaCortaSeisDecimales(this.cmToPies(valor)) + "ft";
            }
            if (a=="pulgadas(in)"){
                if (b=="cm")
                    return valor + "in = " + this.cadenaCortaSeisDecimales(this.inToCm(valor)) + "cm";
                if (b=="pulgadas(in)")
                    return valor + "in = " + valor + "in";
                if (b=="pies(ft)")
                    return valor + "in = " + this.cadenaCortaSeisDecimales(this.inToPies(valor)) + "ft";
            }
            if (a=="pies(ft)"){
                if (b=="cm")
                    return valor + "ft = " + this.cadenaCortaSeisDecimales(this.ftToCm(valor)) + "cm";
                if (b=="pulgadas(in)")
                    return valor + "ft = " + this.cadenaCortaSeisDecimales(this.ftToIn(valor)) + "in";
                if (b=="pies(ft)")
                    return valor + "ft = " + valor + "ft";
            }
            if (a=="kg"){
                if (b=="kg")
                    return valor + "kg = " + valor + "kg";
                if (b=="libras")
                    return valor + "kg = " + this.cadenaCortaSeisDecimales(this.kgToLibras(valor)) + " libras";
                if (b=="onzas")
                    return valor + "kg = " + this.cadenaCortaSeisDecimales(this.kgToOnzas(valor)) + " onzas";
                if (b=="stone")
                    return valor + "kg = " + this.cadenaCortaSeisDecimales(this.kgToStones(valor)) + " stones";
            }
            if (a=="libras"){
                if (b=="kg")
                    return valor + "libras = " + this.cadenaCortaSeisDecimales(this.librasToKg(valor)) + "kg";
                if (b=="libras")
                    return valor + "libras = " + valor + " libras";
                if (b=="onzas")
                    return valor + "libras = " + this.cadenaCortaSeisDecimales(this.librasToOnzas(valor)) + " onzas";
                if (b=="stone")
                    return valor + "libras = " + this.cadenaCortaSeisDecimales(this.librasToStones(valor)) + " stones";
            }
            if (a=="onzas"){
                if (b=="kg")
                    return valor + "onzas = " + this.cadenaCortaSeisDecimales(this.onzasToKg(valor)) + "kg";
                if (b=="libras")
                    return valor + "onzas = " + this.cadenaCortaSeisDecimales(this.onzasToLibras(valor)) + " libras";
                if (b=="onzas")
                    return valor + "onzas = " + valor + " onzas";
                if (b=="stone")
                    return valor + "onzas = " + this.cadenaCortaSeisDecimales(this.onzasToStones(valor)) + " stones";
            }
            if (a=="stone"){
                if (b=="kg")
                    return valor + "stones = " + this.cadenaCortaSeisDecimales(this.stonesToKg(valor)) + "kg";
                if (b=="libras")
                    return valor + "stones = " + this.cadenaCortaSeisDecimales(this.stonesToLibras(valor)) + " libras";
                if (b=="onzas")
                    return valor + "stones = " + this.cadenaCortaSeisDecimales(this.stonesToOnzas(valor)) + " onzas";
                if (b=="stone")
                    return valor + "stones = " + valor + " stones";
            }
        }
        else{
            alert("Sólo puede introducir números");
            document.getElementById("introduce").value = '';
            return "Resultado";
        }
    }
    cadenaCortaSeisDecimales(number){
        var string = number.toString();
        var devuelve = "";
        for (var i=0; i<string.length; i++){
            if (i<6)
                devuelve += string.charAt(i);
            else
                break;
        }
        return devuelve;
    }
    isNum(cadena){
        if (cadena == '')
            return false;
        var num = ['0','1','2','3','4','5','6','7','8','9','.'];
        for(var i in cadena)
            if (!(cadena.charAt(i) in num))
                return false;
        return true;
    }
    cmToPulg(a){
        return (parseFloat(a)/2.54).toString();
    }
    cmToPies(a){
        return (parseFloat(a)/30.48).toString();
    }
    inToCm(a){
        return (parseFloat(a)*2.54).toString();
    }
    inToPies(a){
        return (parseFloat(a)/12).toString();
    }
    ftToCm(a){
        return (parseFloat(a)*30.48).toString();
    }
    ftToIn(a){
        return (parseFloat(a)*12).toString();
    }
    kgToLibras(a){
        return (parseFloat(a)*2.205).toString();
    }
    kgToOnzas(a){
        return (parseFloat(a)*35.274).toString();
    }
    kgToStones(a){
        return (parseFloat(a)/6.35).toString();
    }
    librasToKg(a){
        return (parseFloat(a)/2.205).toString();
    }
    librasToOnzas(a){
        return (parseFloat(a)*16).toString();
    }
    librasToStones(a){
        return (parseFloat(a)/14).toString();
    }
    onzasToKg(a){
        return (parseFloat(a)/35.274).toString();
    }
    onzasToLibras(a){
        return (parseFloat(a)/16).toString();
    }
    onzasToStones(a){
        return (parseFloat(a)/224).toString();
    }
    stonesToKg(a){
        return (parseFloat(a)*6.35).toString();
    }
    stonesToLibras(a){
        return (parseFloat(a)*14).toString();
    }
    stonesToOnzas(a){
        return (parseFloat(a)*224).toString();
    }
}


var calculadora = new CalculadoraCambioUnid();
var de;
var a;