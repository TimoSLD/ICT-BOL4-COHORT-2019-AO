//timo lemmen, opdracht: pizza calculator.
var PizzaSmall = prompt ("hoeveel small pizza's wilt u?","aantal"); //vraagt aantal small pizza's
var PrijsPizzaSmall = 4.99; //dit is de prijs van 
document.write("Small Pizza: $", PizzaSmall*PrijsPizzaSmall.toFixed(2),"<br/>") 
    function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);//zorgt ervoor dat het afrond
}
var PizzaMedium = prompt ("hoeveel medium pizza's wilt u?","aantal"); //vraagt aantal medium pizza's
var PrijsPizzaMedium = 6.99; //
document.write("Medium Pizza: $", PizzaMedium*PrijsPizzaMedium,"<br/>")
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);//zorgt ervoor dat het afrond
}
var PizzaLarge = prompt ("hoeveel large pizza's wilt u?","aantal"); //vraagt aantal medium pizza's
var PrijsPizzaLarge = 9.99; //
document.write("large Pizza: $", PizzaLarge*PrijsPizzaLarge,"<br/>")
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);//zorgt ervoor dat het afrond
}
var totaalsmall = PizzaSmall*PrijsPizzaSmall;
var totaalmedium = PizzaMedium*PrijsPizzaMedium;
var totaallarge = PizzaLarge*PrijsPizzaLarge;

document.write("eindtotaal: $",totaalsmall+totaalmedium+totaallarge);// brekend het totaal




