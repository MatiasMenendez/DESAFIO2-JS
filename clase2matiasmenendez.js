let valor1 = Number(prompt("ingresar un numero entre 1 y 50"));

let valor2 = Number(prompt("ingresar un numero entre 40 y 100"));

if (valor1 > 50 || 1 > valor1){

    alert("Uno de los valores ingresados es inocrrecto");
}
else if (valor2 > 100 || 40 > valor2){

    alert("Uno de los valores ingresados es inocrrecto");
}
else if (valor1 > valor2){

    alert("El numero " + valor1 + "es mayor a " + valor2);
}
else if (valor2 > valor1) {

    alert("El numero " + valor1 + "es menor a " + valor2);
}
else if (valor1 = valor2){

    alert("El numero " + valor1 + "es igual a " + valor2);
}
