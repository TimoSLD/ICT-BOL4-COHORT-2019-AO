var title = document.getElementById('title');
var description = document.getElementById("description");
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var image = document.getElementById('image');
var inventoryItem = document.getElementById('inventoryItem');
var key = false;
var kist = false;
var zwaard = false;

//bos
title.innerHTML = 'welkom bij de game!';
description.innerHTML = "";
button1.innerHTML = "beginnen";
button1.onclick = function() {Bos()};
// document.getElementById("button1").setAttribute('onclick', 'Bos');
button2.style.display = 'none'
button3.style.display = 'none'
inventoryItem.style.display = "none";
image.src = "img/horrorbegin.jfif";

//bos starten.
function Bos(){
    title.innerHTML = 'het horror bos';
    description.innerHTML = 'Je bent wakker geworden in het horror bos.\
     je weet niet hoe je hier bent gekomen en je gaat opzoek naar de oplossing. je krijgt de keuze om een pad te kiezen.';
     button1.innerHTML = "Ga naar links";
    button1.onclick = function() {bosLinks()};
     button2.innerHTML = "Ga naar rechts";
    button2.onclick = function() {bosRechts()};
     button2.style.display = "inline-block";
    button3.style.display = "none";
    inventoryItem.style.display = "none";
    image.src = 'img/BW_E32019_parking.png';
    key = false;
    kist = false;
    zwaard = false;
}
//keuze rechts.
function bosRechts(){
    title.innerHTML = 'het horror bos';
    description.innerHTML = 'je bent in een berenklem gestapt. je bent dood!';
    button1.innerHTML = 'opnieuw beginnen';
    button1.onclick = function() {Bos()};
    image.src = 'img/berenklem.jpg';
    button2.style.display = "none";
    button3.style.display = "none";
}
//keuze links.
function bosLinks(){
    title.innerHTML = 'het horror bos';
    description.innerHTML = 'je ziet een pad voor je. Je loopt verder en je ziet een schatkist.';
    button1.innerHTML = 'open de kist';
    button1.onclick = function() {geenSleutel()};
    button2.innerHTML = 'laat de kist liggen';
    button2.onclick = function() {manTegenkomen()};
    button2.style.display = "inline-block";
    button3.innerHTML = 'kist meenemen';
    button3.onclick = function() {kistMeenemen()};
    button3.style.display = "inline-block";
    image.src = 'img/schatkist.jpg';   
}
//geen sleutel, probeer wat anders.
function geenSleutel(){
    title.innerHTML = 'het horror bos';
    description.innerHTML = 'je hebt geen sleutel';
    button1.innerHTML = 'probeer wat anders';
    button1.onclick = function() {bosLinks()};
    image.src = 'img/opslot.jpg';
    button2.style.display = "none";
    button3.style.display = "none";  
}
//je hebt de kist meegenomen.
function kistMeenemen(){
    kist = true
    title.innerHTML = 'het horror bos';
    description.innerHTML = 'je hebt de kist meegenomen.'
    button1.innerHTML = 'oke';
    button1.onclick = function() {manTegenkomen()};
    button2.style.display = "none";
    button3.style.display = "none";
    image.src = 'img/inventory.jpg'; 
    inventoryItem.src = 'img/schatkist.jpg';
    inventoryItem.style.display = 'inline-block'; 
}
//je komt een man tegen.
function manTegenkomen(){
    title.innerHTML = 'het horror bos';
    descroption.innerHTML = 'je komt een man tegen.'
    button1.innerHTML = 'spreek de man aan';
    button1.onclick = function() {dood()};
    button2.innerHTML = 'ongezien voorbij de man lopen';
    button2.onclick = function() {doorlopen()};
    button2.style.display = "inline-block";
    button3.style.display = "none";
    image.src = 'img/man.jpg';   
    inventoryItem.src = 'img/schatkist.jpg';
}