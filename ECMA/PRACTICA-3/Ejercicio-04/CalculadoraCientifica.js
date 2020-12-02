"use strict";
// Clase calculadora básica ejercicio 3:
class CalculadoraBasica {
    constructor (){
    }
    dígitos(name){
        pantalla = pantalla.concat(name);
        document.getElementById('pantalla').value = pantalla;
    }
    punto(){
        pantalla = pantalla.concat(".");
        document.getElementById('pantalla').value = pantalla;
    }
    suma(){
        pantalla = pantalla.concat("+");
        document.getElementById('pantalla').value = pantalla;
    }
    resta(){
        pantalla = pantalla.concat("-");
        document.getElementById('pantalla').value = pantalla;
    }
    multiplicación(){
        pantalla = pantalla.concat("*");
        document.getElementById('pantalla').value = pantalla;
    }
    división(){
        pantalla = pantalla.concat("/");
        document.getElementById('pantalla').value = pantalla;
    }
    // Muestra el contenido de la memoria y la resetea a 0.
    mrc(){
        document.getElementById('pantalla').value = memoria;
        memoria = '0';
        pantalla = '';
    }
    // Resta el valor de la pantalla a la memoria.
    mMenos(){
        try{
            memoria = eval(memoria.concat("-").concat(document.getElementById('pantalla').value)).toString();
            document.getElementById('pantalla').value = memoria;
            pantalla = '';
        } catch(e){
            alert("Expresión a evaluar incorrecta");
            pantalla = '';
            document.getElementById('pantalla').value = pantalla;
        }
    }
    // Suma el valor de la pantalla a la memoria.
    mMas(){ 
        try{
            memoria = eval(memoria.concat("+").concat(document.getElementById('pantalla').value)).toString();
            document.getElementById('pantalla').value = memoria;
            pantalla = '';
        } catch(e){
            alert("Expresión a evaluar incorrecta");
            pantalla = '';
            document.getElementById('pantalla').value = pantalla;
        }
    }
    borrar(){
        pantalla = '';
        memoria = '0';
        document.getElementById('pantalla').value = pantalla;
    }
    igual(){
        try{
            if(document.getElementById('pantalla').value != ''){
                document.getElementById('pantalla').value = eval(pantalla);
                pantalla = '';
            }
        } catch(e){
            alert("Expresión a evaluar incorrecta");
            pantalla = '';
            document.getElementById('pantalla').value = pantalla;
        }
    }
}

// Clase calculadora científica que hereda de CalculadoraBasica:
class CalculadoraCientifica extends CalculadoraBasica{
    constructor(){
        super();
    }
    cadenaCortaDoceDecimales(number){
        var string = number.toString();
        var devuelve = "";
        for (var i=0; i<string.length; i++){
            if (i<12)
                devuelve += string.charAt(i);
            else
                break;
        }
        return devuelve;
    }
    // Cambia de grados a radianes o al revés
    DEGRAD(){
        var valor = parseFloat(document.getElementById('pantalla').value);
        if(!Number.isNaN(valor)){
        // pasa a radianes
        if(document.getElementById('btnGrados').value == "DEG"){
            pantalla = this.cadenaCortaDoceDecimales(valor*pi/180);
            document.getElementById('btnGrados').value = "RAD";
        }
        // pasa a grados
        else{
            pantalla = this.cadenaCortaDoceDecimales((valor*180/pi).toString());
            document.getElementById('btnGrados').value = "DEG";
        }
        document.getElementById('pantalla').value = pantalla;
        pantalla = '';
        }else{
            alert("Expresión a evaluar incorrecta");
            pantalla = '';
            document.getElementById('pantalla').value = pantalla;
        }
    }
    alCuadrado(){
        var valor = parseFloat(document.getElementById('pantalla').value);
        if(!Number.isNaN(valor)){
            document.getElementById('pantalla').value = this.cadenaCortaDoceDecimales(valor*valor);
            pantalla = '';
        }else{
            alert("Expresión a evaluar incorrecta");
            pantalla = '';
            document.getElementById('pantalla').value = pantalla;
        }
    }
    elevadoY(){
        if (pantalla != '')
            igual();
        pantalla = document.getElementById('pantalla').value;
        pantalla = pantalla.concat("^");
        document.getElementById('pantalla').value = pantalla;
    }
    // Devuelve true si la pantalla tiene una operación de elevar.
    isElevado(operacion){
        return operacion.includes("^");
    }
    // Método que hace las cuentas de elevar.
    procesaElevado(operacion){
        var primerValor = '';
        var segundoValor = '';
        var contador = 0;
        while(operacion.charAt(contador) != "^"){
            primerValor = primerValor.concat(operacion.charAt(contador));
            contador++;
        } contador++;
        while(contador != operacion.length){
            segundoValor = segundoValor.concat(operacion.charAt(contador));
            contador++;
        }
        
        try{
            if(segundoValor != ''){
                segundoValor = eval(segundoValor);
                pantalla ='';
                return Math.pow(primerValor,segundoValor);
            }
            else
                throw 'Error potencia';
        } catch(e){
            alert("Operación de elevado incorrecta");
            pantalla = '';
            document.getElementById('pantalla').value = pantalla;
            return pantalla;
        }
    }
    igual(){
        if (this.isPi(pantalla))
            document.getElementById('pantalla').value = this.procesaPi(pantalla);
        else
            if (this.isElevado(pantalla))
                document.getElementById('pantalla').value = this.procesaElevado(pantalla);
            else
                if (this.isModulo(pantalla))
                    document.getElementById('pantalla').value = this.procesaModulo(pantalla);
                else
                    if(document.getElementById('pantalla').value != 'NaN')
                        super.igual();
    }
    seno(){
        if (pantalla != '')
            this.igual();
        pantalla = document.getElementById('pantalla').value;
        pantalla = this.cadenaCortaDoceDecimales(Math.sin(parseFloat(pantalla)));
        document.getElementById('pantalla').value = pantalla;
        pantalla = '';
    }
    coseno(){
        if (pantalla != '')
            this.igual();
        pantalla = document.getElementById('pantalla').value;
        pantalla = this.cadenaCortaDoceDecimales(Math.cos(parseFloat(pantalla)));
        document.getElementById('pantalla').value = pantalla;
        pantalla = '';
    }
    tangente(){
        if (pantalla != '')
            this.igual();
        pantalla = document.getElementById('pantalla').value;
        pantalla = this.cadenaCortaDoceDecimales(Math.tan(parseFloat(pantalla)));
        document.getElementById('pantalla').value = pantalla;
        pantalla = '';
    }
    raiz(){
        if (pantalla != '')
            this.igual();
        pantalla = document.getElementById('pantalla').value;
        pantalla = this.cadenaCortaDoceDecimales(Math.sqrt(parseFloat(pantalla)));
        document.getElementById('pantalla').value = pantalla;
        pantalla = '';
    }
    diezElevadoX(){
        if (pantalla != '')
            this.super.igual();
        pantalla = document.getElementById('pantalla').value;
        pantalla = this.cadenaCortaDoceDecimales(Math.pow(10,parseFloat(pantalla)));
        document.getElementById('pantalla').value = pantalla;
        pantalla = '';
    }
    logaritmo(){
        if (pantalla != '')
            this.super.igual();
        pantalla = document.getElementById('pantalla').value;
        pantalla = this.cadenaCortaDoceDecimales(Math.log(parseFloat(pantalla)));
        document.getElementById('pantalla').value = pantalla;
        pantalla = '';
    }
    exponente(){
        if (pantalla != '')
            this.igual();
        pantalla = document.getElementById('pantalla').value;
        pantalla = pantalla.concat("e");
        document.getElementById('pantalla').value = pantalla;
    }
    modulo(){
        if (pantalla != '')
            this.igual();
        pantalla = document.getElementById('pantalla').value;
        pantalla = pantalla.concat("mod");
        document.getElementById('pantalla').value = pantalla;
    }
    // Devuelve true si la pantalla tiene una operación de modulo.
    isModulo(operacion){
        return operacion.includes("mod");
    }
    // Método que hace las cuentas del modulo.
    procesaModulo(operacion){
        var primerValor = '';
        var segundoValor = '';
        var contador = 0;
        while(operacion.charAt(contador) != "m"){
            primerValor = primerValor.concat(operacion.charAt(contador));
            contador++;
        } contador = contador + 3;
        while(contador != operacion.length){
            segundoValor = segundoValor.concat(operacion.charAt(contador));
            contador++;
        }
        
        try{
            if(segundoValor != ''){
                segundoValor = eval(segundoValor);
                pantalla ='';
                return primerValor%segundoValor;
            }
            else
                throw 'Error potencia';
        } catch(e){
            alert("Operación de elevado incorrecta");
            pantalla = '';
            document.getElementById('pantalla').value = pantalla;
            return pantalla;
        }
    }
    borrar(){
        resAntesBorrar = document.getElementById('pantalla').value;
        super.borrar();
    }
    // Método que te devuelve el resultado previo al último borrado.
    ultRes(){
        document.getElementById('pantalla').value = resAntesBorrar;
        if (resAntesBorrar != 0)
            pantalla = resAntesBorrar;
        else
            pantalla = '';
    }
    // Método que borra el contenido de la pantalla y resetea el último resultado antes de borrar.
    CE(){
        resAntesBorrar = '0';
        super.borrar();
    }
    eliminaUltCaracter(){
        if(document.getElementById('pantalla').value != ''){
            pantalla = document.getElementById('pantalla').value;
            pantalla = pantalla.substring(0,pantalla.length-1);
            document.getElementById('pantalla').value = pantalla;
        }
    }
    pi(){
        if (pantalla != '')
            pantalla = "(".concat(pantalla).concat(")");
        pantalla = pantalla.concat("π");
        document.getElementById('pantalla').value = pantalla;
    }
    // Devuelve true si la pantalla tiene un caracter pi.
    isPi(operacion){
        return operacion.includes("π");
    }
    // Método que hace las cuentas de pi.
    procesaPi(operacion){
        var primerValor = '';
        var segundoValor = '';
        var contador = 0;
        while(operacion.charAt(contador) != "π"){
            primerValor = primerValor.concat(operacion.charAt(contador));
            contador++;
        } contador++;
        while(contador != operacion.length){
            segundoValor = segundoValor.concat(operacion.charAt(contador));
            contador++;
        }
        
        try{
            if (primerValor == '')
                primerValor = '1';
            var retorna = eval(primerValor)*pi;
            if(segundoValor != '')
                retorna = eval(retorna.toString().concat(segundoValor));
            pantalla ='';
            return this.cadenaCortaDoceDecimales(retorna);
        } catch(e){
            alert("Operación de elevado incorrecta");
            pantalla = '';
            document.getElementById('pantalla').value = pantalla;
            return pantalla;
        }
    }
    factorial(){
        if (pantalla != ''){
            this.igual();
            var n = parseFloat(document.getElementById('pantalla').value);
            document.getElementById('pantalla').value = this.fact(n).toString();
            pantalla = '';
        }
    }
    fact(num){
        if (num == 0 || num == 1)
            return 1;
        var contador = num;
        var res = 1;
        while (contador>0){
            res *= contador;
            contador--;
        }
        return this.cadenaCortaDoceDecimales(res);
    }
    cambioSigno(){
        if (pantalla != ''){
            this.igual();
            document.getElementById('pantalla').value = (parseFloat(document.getElementById('pantalla').value)*-1).toString();
            pantalla = document.getElementById('pantalla').value ;
        }
    }
    abrirParentesis(){
        pantalla = pantalla.concat("(");
        document.getElementById('pantalla').value = pantalla;
    }
    cerrarParentesis(){
        pantalla = pantalla.concat(")");
        document.getElementById('pantalla').value = pantalla;
    }

}



// String donde se acumulan las teclas pulsadas.
var pantalla = '';
// Mrc deposita el resultado
var memoria = '0';
// Variable que contiene pi
var pi = Math.PI
// Variable que guarda el último resultado antes de borrar
var resAntesBorrar = '0'

var calculadora = new CalculadoraCientifica();