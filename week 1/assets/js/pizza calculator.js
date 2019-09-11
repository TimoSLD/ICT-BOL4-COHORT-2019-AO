//Timo Lemmen, opdracht: pizza calculator
var PizzaSmall = prompt ("hoeveel small pizza's wilt u?","aantal"); //vraagt aantal small pizza's
var PrijsPizzaSmall = 4.99; //dit is de prijs van 
document.write("Small Pizza: $", PizzaSmall*PrijsPizzaSmall,"<br/>")

var PizzaMedium = prompt ("hoeveel medium pizza's wilt u?","aantal"); //vraagt aantal medium pizza's
var PrijsPizzaMedium = 6.99; //
document.write("Medium Pizza: $", PizzaMedium*PrijsPizzaMedium,"<br/>")

var PizzaLarge = prompt ("hoeveel large pizza's wilt u?","aantal"); //vraagt aantal medium pizza's
var PrijsPizzaLarge = 9.99; //
document.write("large Pizza: $", PizzaLarge*PrijsPizzaLarge,"<br/>")

var totaalsmall = PizzaSmall*PrijsPizzaSmall;
var totaalmedium = PizzaMedium*PrijsPizzaMedium;
var totaallarge = PizzaLarge*PrijsPizzaLarge;

document.write("eindtotaal: $",totaalsmall+totaalmedium+totaallarge);// brekend het totaal



