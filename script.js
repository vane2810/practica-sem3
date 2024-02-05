//Ejercicio 1
function Velocidad() {
    var distanciaKm = parseFloat(document.getElementById('distancia').value);
    var tiempoMin = parseFloat(document.getElementById('tiempo').value);

    if (isNaN(distanciaKm) || isNaN(tiempoMin)) {
        alert("Por favor, ingresa valores numéricos válidos");
        return;
    }

    var velocidad = (distanciaKm * 1000) / (tiempoMin * 60);
    document.getElementById('resultado').innerHTML = "La velocidad es: " + velocidad + " m/s";
}


//Ejrcicio 2
function Triangulo() {
    var lado1 = parseFloat(document.getElementById('lad1').value);
    var lado2 = parseFloat(document.getElementById('lad2').value);
    var lado3 = parseFloat(document.getElementById('lad3').value);

    if (lado1 === lado2 && lado2 === lado3) {
        var respuesta = "Es un Triángulo Equilátero";
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        var respuesta = "Es un Triángulo Escaleno";
    } else {
        var respuesta = "Es un Triángulo Isósceles";
    }

    document.getElementById('respuesta').innerHTML = respuesta;
}


//Ejercicio 3
function Calculadora(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa valores numéricos válidos");
        return;
    }

    var suma = num1 + num2;
    var resta = num1 - num2
    var multi= num1*num2;
    var div = num2 !== 0 ? num1 / num2 : "No se puede dividir entre cero";

    document.getElementById('suma').innerHTML = "Suma: " + suma;
    document.getElementById('resta').innerHTML = "Resta: " + resta;
    document.getElementById('multi').innerHTML = "Multiplicación: " + multi;
    document.getElementById('div').innerHTML = "División: " + div;
}


//Ejercicio 4
function NumPrimo(){
    var num = parseInt(document.getElementById('numero').value);

    if (num <= 1) {
        var resultado = "No es primo";
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                var resultado = "No es primo";
                break;
            }
        }
        if (!resultado) {
            var resultado = "Es primo";
        }
    }

    document.getElementById('resul').innerText =  resultado;
}
