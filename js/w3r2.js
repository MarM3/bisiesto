let bisiesto = prompt("Introduzca un año: ");

if (bisiesto % 4 === 0 && (bisiesto % 100 !== 0 || bisiesto % 400 === 0)){
    alert("El año " + bisiesto + " es un año bisiesto.");
}else{
    alert("El año " + bisiesto + " no es un año bisiesto.");
}