var diameter = document.querySelector('input');
var perimeter = document.querySelector('h2');
var timePrint = document.querySelector ( 'h3');
var time = new Date();

function omtrek() {
    const pi = 3.141592;
    return diameter.value * diameter.value * pi *0.25;
}

function resultaat() {
    alert ("Omtrek van de cirkel is: " + omtrek());
}

function printdate() {
    document.getElementById("datum").innerHTML = printdate();
}
