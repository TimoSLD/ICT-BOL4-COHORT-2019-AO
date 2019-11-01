alert ("als je aan het einde van je bestelling 'afrekenen' typt dan krijg je je bestelling te zien." )

var totaalPrijsSnacks = 0
var totaalPrijs = 0
const PRIJSFRIS = 2.99
const PRIJSBIER = 2.50
const PRIJSWIJN = 4.80
const PRIJSSNACKS8 = 4.85
const PRIJSSNACKS16 = 6.99
var totaalFris = 0
var totaalBier = 0
var totaalWijn = 0
totaalPrijsSnacks16 = 0
totaalPrijsSnacks8 = 0



var keuze = prompt ("welke bestelling wilt u toevoegen? kies uit drankjes of snacks");
if (keuze == "drankjes"){



        plaatsBestelling();
    }
    else if(keuze == "snacks"){
        
            plaatsBestellingSnacks();
    } 
    
    function plaatsBestelling (){
        var keuze = prompt ("Je kunt nu opgeven welk drankje je wilt bestellen. Je kunt intypen 'fris', 'bier' of 'wijn'");
            if (keuze == "fris"){
                var aantalDrankjes = parseInt(prompt ("Hoeveel fris wilt u toevoegen aan uw bestelling"))
                totaalFris = (totaalFris + aantalDrankjes)
                plaatsBestelling()
            }
            else if (keuze == "bier"){
                var aantalDrankjes = parseInt(prompt ("Hoeveel bier wilt u toevoegen aan uw bestelling"))
                totaalBier = (totaalBier + aantalDrankjes)
                plaatsBestelling()
            }
            else if (keuze == "wijn"){
                var aantalDrankjes = parseInt(prompt ("Hoeveel wijn wilt u toevoegen aan uw bestelling"))
                totaalWijn = (totaalWijn + aantalDrankjes)
                plaatsBestelling()
            }
            else if (keuze == "snacks"){
                plaatsBestellingSnacks();
            }
            else if(keuze == "afrekenen"){
                afrekenen();
                return false;
            }
    }
    
    function plaatsBestellingSnacks (){
            keuze = prompt ("Hoeveel bitterballen wilt u toevoegen, een schaal van 8 of 16?");
            if (keuze== "8"){
                var  aantalSnacks = parseInt(prompt ("Hoeveel bitterballenschalen van 8 stuks wilt u toevoegen aan uw bestelling"))
                totaalPrijsSnacks8 = (PRIJSSNACKS8 + aantalSnacks)
                plaatsBestellingSnacks()
            }
            else if (keuze == "16"){
                var aantalSnacks = parseInt(prompt ("Hoeveel bitterballenschalen van 16 stuks wilt u toevoegen aan uw bestelling"))
                totaalPrijsSnacks16 = (PRIJSSNACKS16 + aantalSnacks)
                plaatsBestellingSnacks()
            
            }
            else if (keuze== "afrekenen"){
                afrekenen(); 
                return false;
            }
            else if (keuze== "drankjes"){
               plaatsBestelling();

            }
        }
            
    function afrekenen (){
        document.write(totaalFris + " Drankjes Fris - €" + PRIJSFRIS.toFixed(2) * totaalFris + "<br>")
        document.write(totaalBier + " Drankjes Bier - €" + PRIJSBIER.toFixed(2) * totaalBier + "<br>")
        document.write(totaalWijn + " Drankjes Wijn - €" + PRIJSWIJN.toFixed(2) * totaalWijn + "<br>")
        document.write(totaalPrijsSnacks8 + " gehaktballenschaal 8 - €" + PRIJSSNACKS8.toFixed(2) * totaalPrijsSnacks8  + "<br>")
        document.write(totaalPrijsSnacks16 + " gehaktballenschaal 16 - €" + PRIJSSNACKS16.toFixed(2) * totaalPrijsSnacks16 + "<br>")
        document.write("Sub totaal: €" + PRIJSFRIS.toFixed(2) * totaalFris + PRIJSBIER.toFixed(2) * totaalBier + PRIJSWIJN.toFixed(2) 
        * totaalWijn + PRIJSSNACKS8.toFixed(2) * totaalPrijsSnacks8  + PRIJSSNACKS16.toFixed(2) * totaalPrijsSnacks16)
    }
    