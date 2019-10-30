alert ("als je aan het einde van je bestelling 'afrekenen' typt dan krijg je je bestelling te zien." )

var totaalPrijsSnacks = 0
var totaalPrijs = 0
const PRIJSFRIS = 2.99
const PRIJSBIER = 2.50
const PRIJSWIJN = 4.80
const PRIJSSNACKS8 = 4.85
const PRIJSSNACKS16 = 6.99

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
                var aantalDrankjes = prompt ("Hoeveel fris wilt u toevoegen aan uw bestelling")
                totaalPrijs += (PRIJSFRIS * aantalDrankjes)
                plaatsBestelling()
            }
            else if (keuze == "bier"){
                var aantalDrankjes = prompt ("Hoeveel bier wilt u toevoegen aan uw bestelling")
                totaalPrijs += (PRIJSBIER * aantalDrankjes)
                plaatsBestelling()
            }
            else if (keuze == "wijn"){
                var aantalDrankjes = prompt ("Hoeveel wijn wilt u toevoegen aan uw bestelling")
                totaalPrijs += (PRIJSWIJN * aantalDrankjes)
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
                var  aantalSnacks = prompt ("Hoeveel bitterballenschalen van 8 stuks wilt u toevoegen aan uw bestelling")
                totaalPrijsSnacks += (PRIJSSNACKS8 * aantalSnacks)
                plaatsBestellingSnacks()
            }
            else if (keuze == "16"){
                var aantalSnacks = prompt ("Hoeveel bitterballenschalen van 16 stuks wilt u toevoegen aan uw bestelling")
                totaalPrijsSnacks += (PRIJSSNACKS16 * aantalSnacks)
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
        document.write ("totaal bedrag: €"+totaalPrijs.toFixed(2)+totaalPrijsSnacks.toFixed(2))
    }