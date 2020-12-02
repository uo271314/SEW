// Clase calculadora con los atributos y métodos necesarios para realizar operaciones.
"use strict";
        class Calculadora {
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

        // String donde se acumulan las teclas pulsadas.
        var pantalla = '';
        // Mrc deposita el resultado
        var memoria = '0';

        var calculadora = new Calculadora();
