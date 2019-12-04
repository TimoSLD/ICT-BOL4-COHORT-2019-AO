var image = document.getElementById('image');
var inventoryItem = document.getElementById('inventoryItem');
var key = false;
var kist = false;
var zwaard = false;

//bos
document.getElementById('title').innerHTML = 'welkom bij de game!';
document.getElementById("description").innerHTML = "";
document.getElementById("button1").innerHTML = "beginnen";
document.getElementById("button1").onclick = function() {Bos()};
document.getElementById("button2").style.display = 'none'
document.getElementById("button3").style.display = 'none'
document.getElementById("inventoryItem").style.display = "none";
document.getElementById('image').src = "img/horrorbegin.jfif";

//bos starten.
function Bos(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'Je bent wakker geworden in het horror bos.\
     je weet niet hoe je hier bent gekomen en je gaat opzoek naar de oplossing. je krijgt de keuze om een pad te kiezen.';
     document.getElementById("button1").innerHTML = "Ga naar links";
     document.getElementById("button1").onclick = function() {bosLinks()};
     document.getElementById("button2").innerHTML = "Ga naar rechts";
     document.getElementById("button2").onclick = function() {bosRechts()};
     document.getElementById("button2").style.display = "inline-block";
    document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.getElementById('image').src = 'img/BW_E32019_parking.png';
    key = false;
    kist = false;
    zwaard = false;
}
//keuze rechts.
function bosRechts(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je bent in een berenklem gestapt. je bent dood!';
    document.getElementById('button1').innerHTML = 'opnieuw beginnen';
    document.getElementById('button1').onclick = function() {Bos()};
    document.getElementById('image').src = 'img/berenklem.jpg';
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
}
//keuze links.
function bosLinks(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je ziet een pad voor je. Je loopt verder en je ziet een schatkist.';
    document.getElementById('button1').innerHTML = 'open de kist';
    document.getElementById('button1').onclick = function() {geenSleutel()};
    document.getElementById('button2').innerHTML = 'laat de kist liggen';
    document.getElementById('button2').onclick = function() {manTegenkomen()};
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById('button3').innerHTML = 'kist meenemen';
    document.getElementById('button3').onclick = function() {kistMeenemen()};
    document.getElementById("button3").style.display = "inline-block";
    document.getElementById('image').src = 'img/schatkist.jpg';   
}
//geen sleutel, probeer wat anders.
function geenSleutel(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je hebt geen sleutel';
    document.getElementById('button1').innerHTML = 'probeer wat anders';
    document.getElementById('button1').onclick = function() {bosLinks()};
    document.getElementById('image').src = 'img/opslot.jpg';
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";  
}
//je hebt de kist meegenomen.
function kistMeenemen(){
    kist = true
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je hebt de kist meegenomen.'
    document.getElementById('button1').innerHTML = 'oke';
    document.getElementById('button1').onclick = function() {manTegenkomen()};
    document.getElementById("inventoryItem").style.display = 'inline-block';
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById('image').src = 'img/inventory.jpg'; 
    document.getElementById("inventoryItem").src = 'img/schatkist.jpg'; 
}
//je komt een man tegen.
function manTegenkomen(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je komt een man tegen.'
    document.getElementById('button1').innerHTML = 'spreek de man aan';
    document.getElementById('button1').onclick = function() {dood()};
    document.getElementById('button2').innerHTML = 'ongezien voorbij de man lopen';
    document.getElementById('button2').onclick = function() {doorlopen()};
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("button3").style.display = "none";
    document.getElementById('image').src = 'img/man.jpg';   
    invetoryItem.src = 'img/schatkist.jpg';
}
//man aangesproken dus dood.
function dood(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'de man heeft een mes bij zich. hij heeft je neergestoken!';
    document.getElementById('button1').innerHTML = 'opnieuw proberen';
    document.getElementById('button1').onclick = function() {Bos()};
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";  
}
//de man niet aangesproken.
function doorlopen(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je bent de man voorbij. je komt aan bij een openstaand huisje.';
    document.getElementById('button1').innerHTML = 'het huisje doorzoeken';
    document.getElementById('button1').onclick = function() {sleutelGevonden()};
    document.getElementById('button2').innerHTML = 'verder lopen';
    document.getElementById('button2').onclick = function() {beren()};
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById('image').src = 'img/huisje.jpg';   
}

//sleutel gevonden in het huisje.
function sleutelGevonden(){
    key = true
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je hebt een sleutel gevonden in het huisje!';
    document.getElementById('button1').innerHTML = 'sleutel oppakken';
    document.getElementById('button1').onclick = function() {kistOpenen()};
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById('image').src = 'img/inventory.jpg';  
    inventoryItem.src = 'img/download.jfif'; 
    inventoryItem.style.display = 'inline-block'
    invetoryItem.src = 'img/schatkist.jpg';
    inventoryItem.style.display = 'inline-block'
    
}

//beer tegen komen
function beren(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je bent verder gelopen en je komt een beer tegen. je bent dood!';
    document.getElementById('button1').innerHTML = 'opnieuw proberen';
    document.getElementById('button1').onclick = function() {Bos()};
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById('image').src = 'img/beer.jpg';
    
}
//je hebt een sleutel gevonden dus je kan de kist openen.
function kistOpenen(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je kan de kist openen!';
    document.getElementById('button1').innerHTML = 'kist openen';
    document.getElementById('button1').onclick = function() {zwaardGekregen()};
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById('image').src = 'img/schatkist.jpg';
    if (kist === false){
        teruglopenDood();
    }
}
//dood gaan door naar man terug te lopen.
function teruglopenDood(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je bent terug gelopen om de kist te halen.\
    de man ziet je en steekt je dood.';
    document.getElementById('button1').innerHTML = 'opnieuw proberen';
    document.getElementById('button1').onclick = function() {Bos()};
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("image").src = 'img/man.jpg';

}
// zwaard gekregen uit de kist.
function zwaardGekregen(){
    zwaard = true;
    kist = false;
    key = false;
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je hebt een zwaard gevonden in de kist!';
    document.getElementById('button1').innerHTML = 'zwaard meenemen';
    document.getElementById('button1').onclick = function() {teruglopen()};
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById('image').src = 'img/zwaard.jpeg';
    document.getElementById("inventoryItem").src = 'img/zwaard.jpeg';
       
}
//terug lopen met zwaard.
function teruglopen(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'nu je een zwaard hebt ben je veilig. maak je keuze.';
    document.getElementById('button1').innerHTML = 'verder lopen';
    document.getElementById('button1').onclick = function() {berenZwaard()};
    document.getElementById('button2').innerHTML = 'terug naar de man';
    document.getElementById('button2').onclick = function() {naarManTwijfel()};
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("inventoryItem").src = 'img/zwaard.jpeg';
    document.getElementById('image').src = 'img/paden.jpg';
}
//naar de man met zwaard.
function naarManTwijfel(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je ziet de man. weet je zeker dat je naar de man wilt gaan?';
    document.getElementById('button1').innerHTML = 'ja';
    document.getElementById('button1').onclick = function() {naarMan()};
    document.getElementById('button2').innerHTML = 'toch teruggaan';
    document.getElementById('button2').onclick = function() {berenZwaard()};
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("inventoryItem").src = 'img/zwaard.jpeg';
    document.getElementById('image').src = 'img/pad.jpg';
}
//uitgeput door doorlopen.
function berenZwaard(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je bent te uitgeput. je gaat dood.';
    document.getElementById('button1').innerHTML = 'opnieuw beginnen';
    document.getElementById('button1').onclick = function() {Bos()};
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById('image').src = 'img/uitgeput.jpg';   
}
//je bent naar de man gegaan. hij steekt je niet door zwaard.
function naarMan(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je bent bij de man. hij ziet je zwaard en hij steekt je niet. wat doe je?';
    document.getElementById('button1').innerHTML = 'de man doden';
    document.getElementById('button1').onclick = function() {manDoodsteken()};
    document.getElementById('button2').innerHTML = 'vragen hoe je hier bent gekomen';
    document.getElementById('button2').onclick = function() {manVragen()};
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById('image').src = 'img/man.jpg';    
}
//je hebt de man doodgestoken.
function manDoodsteken(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je hebt de man dood gemaakt. de man had je\
    kunnen vertellen hoe je hier uit kon komen';
    document.getElementById('button1').innerHTML = 'opnieuw beginnen';
    document.getElementById('button1').onclick = function() {Bos()};
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";           
}
//toch naar de man gegaan en je gaat vragen.
function manVragen(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'de man wilt het je vertellen maar dan moet je je zwaard inleveren';
    document.getElementById('button1').innerHTML = 'zwaard inleveren';
    document.getElementById('button1').onclick = function() {zwaardInleveren()};
    document.getElementById('button2').innerHTML = 'de man moet eerst vertellen';
    document.getElementById('button2').onclick = function() {manBoos()};
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById('button3').innerHTML = 'wegrennen';
    document.getElementById('button3').onclick = function() {berenZwaard()};
    document.getElementById("button3").style.display = "inline-block";
    document.getElementById('image').src = 'img/schatkist.jpg';   
}

//de man wordt boos.
function manBoos(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'de man wordt boos en hij gaat met je in gevecht. de man maakt je dood';
    document.getElementById('button1').innerHTML = 'opnieuw beginnen';
    document.getElementById('button1').onclick = function() {Bos()};
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById('image').src = 'img/man.jpg';      
}
//zwaard inleveren aan de man.
function zwaardInleveren(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je hebt je zwaard ingeleverd. de man gaat je vertellen\
    hoe je hier bent gekomen';
    document.getElementById('button1').innerHTML = 'de man aanhoren';
    document.getElementById('button1').onclick = function() {einde()};
    document.getElementById('image').src = 'img/man.jpg';
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = 'none'
    zwaard = false;    
}
//einde
function einde(){
    document.getElementById('title').innerHTML = 'het horror bos';
    document.getElementById("description").innerHTML = 'je hebt het horror bos overleefd, dat is nog nooit iemand anders gelukt!<br>\
    ik heb je ontvoerd en er voor gezorgd dat je niks meer wist. ik breng je nu veilig uit het bos en je kan gaan.';
    document.getElementById('button1').innerHTML = 'spel opnieuw spelen';
    document.getElementById('button1').onclick = function() {Bos()};
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById('image').src = 'img/gewonnen2.jpg';
}
