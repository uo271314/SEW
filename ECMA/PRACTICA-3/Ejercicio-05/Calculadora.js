// Calculadora RPN:
class CalculadoraRPN{
    constructor(){
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
    log(){
        if (pila.length()>=1){
            document.getElementById('txtescrito').value = "LOG";
            escrito = '';
            pila.apilar(this.cadenaCortaDoceDecimales(Math.log10(parseFloat(pila.desapilar()))));
            pila.mostrar();
        }
        else
            alert('Error: operación LOG no realizada');
    }
    ln(){
        if (pila.length()>=1){
            document.getElementById('txtescrito').value = "LN";
            escrito = '';
            pila.apilar(this.cadenaCortaDoceDecimales(Math.log(parseFloat(pila.desapilar()))));
            pila.mostrar();
        }
        else
            alert('Error: operación LN no realizada');
    }
    sin(){
        if (pila.length()>=1){
            document.getElementById('txtescrito').value = "SIN";
            escrito = '';
            pila.apilar(this.cadenaCortaDoceDecimales(Math.sin(parseFloat(pila.desapilar()))));
            pila.mostrar();
        }
        else
            alert('Error: operación LN no realizada');
    }
    cos(){
        if (pila.length()>=1){
            document.getElementById('txtescrito').value = "COS";
            escrito = '';
            pila.apilar(this.cadenaCortaDoceDecimales(Math.cos(parseFloat(pila.desapilar()))));
            pila.mostrar();
        }
        else
            alert('Error: operación LN no realizada');
    }
    tan(){
        if (pila.length()>=1){
            document.getElementById('txtescrito').value = "TAN";
            escrito = '';
            pila.apilar(this.cadenaCortaDoceDecimales(Math.tan(parseFloat(pila.desapilar()))));
            pila.mostrar();
        }
        else
            alert('Error: operación LN no realizada');
    }
    digito(nombre){
        escrito += nombre;
        document.getElementById('txtescrito').value = escrito;
    }
    borrar(){
        escrito = '';
        document.getElementById('txtescrito').value = escrito;
    }
    enter(){
        if (this.isNum()){
            pila.apilar(escrito);
            pila.mostrar();
            escrito = '';
        }
        else{
            alert ("Error: introduzca sólo números o sólo operaciones");
        }
    }
    isNum(){
        if (escrito == '')
            return false;
        var num = ['0','1','2','3','4','5','6','7','8','9'];
        for(var i in escrito)
            if (!i in num)
                return false;
        return true;
    }
    div(){
        escrito = '';
        if (pila.length()>=2){
            document.getElementById('txtescrito').value = "%";
            var elto1 = pila.desapilar();
            var elto2 = pila.desapilar();
            pila.apilar(parseFloat(elto2)/parseFloat(elto1));
            pila.mostrar();
        }
        else
            alert("No hay suficientes valores para realizar la división");
    }
    mul(){
        escrito = '';
        if (pila.length()>=2){
            document.getElementById('txtescrito').value = "x";
            var elto1 = pila.desapilar();
            var elto2 = pila.desapilar();
            pila.apilar(parseFloat(elto2)*parseFloat(elto1));
            pila.mostrar();
        }
        else
            alert("No hay suficientes valores para realizar la multiplicación");
    }
    menos(){
        escrito = '';
        if (pila.length()>=2){
            document.getElementById('txtescrito').value = "-";
            var elto1 = pila.desapilar();
            var elto2 = pila.desapilar();
            pila.apilar(parseFloat(elto2)-parseFloat(elto1));
            pila.mostrar();
        }
        else
            alert("No hay suficientes valores para realizar la resta");
    }
    coma(){
        escrito += ".";
        document.getElementById('txtescrito').value = escrito;
    }
    reset(){
        escrito = '';
        document.getElementById('txtescrito').value = escrito;
        pila = new PilaLIFO();
        pila.mostrar();
    }
    suma(){
        escrito = '';
        if (pila.length()>=2){
            document.getElementById('txtescrito').value = "+";
            var elto1 = pila.desapilar();
            var elto2 = pila.desapilar();
            pila.apilar(parseFloat(elto2)+parseFloat(elto1));
            pila.mostrar();
        }
        else
            alert("No hay suficientes valores para realizar la suma");
    }
}

class PilaLIFO { 
    constructor (){ 
        this.pila = new Array();
        this.eltosPila = 0;
        this.pantalla = '';
        this.numPantalla = '';
    }
    length(){
        return this.eltosPila;
    }
    apilar(valor){
        this.pila.push(valor);
        this.eltosPila += 1;
    }
    desapilar(){
        this.eltosPila -=1;
        return (this.pila.pop());
    }
    mostrar(){
        pantalla = '';
        numPantalla = '';
        document.getElementById('pant').value = '';
        document.getElementById('numpant').value = '';
        var voltearNumPant = new Array();
        for (var i in this.pila){
            pantalla += this.pila[i] + "\n";
            voltearNumPant.push(i + ":\n");
        }
        voltearNumPant.reverse();
        for (var i=0; i<voltearNumPant.length; i++){
            numPantalla += voltearNumPant[i];
        }
        document.getElementById('pant').value = pantalla;
        document.getElementById('numpant').value = numPantalla;
    }
}
var pila = new PilaLIFO("Pila LIFO");
var eltosPila;

var pantalla;
var numPantalla;
// Pila de la calculadora
var pila = new PilaLIFO();
var escrito = '';

var calculadora = new CalculadoraRPN();