alert("welkom bij prison escape")

var vraag = prompt("je staat op het punt om te ontsnappen uit de gevangenis.\
Je komt terecht op een punt dat je naar het bos of strand kunt gaan\n1: ga het bos in.\n2:ga naar het strand.")

if (vraag == 1){
  alert ("Goed, op het strand staan bewakers.");
  
  vraag = prompt("je bent nu in het bos en je komt op een pad terecht die in tweeen splitst. je kan naar rechts en links.\
  \n1: ga naar rechts.\n2:ga naar links")
    
  if (vraag == 1){
    alert("goed, het linkerpad is oneindig, je had nooit ergens uitgekomen.")
    vraag = prompt("je ziet een huisje.\n1: ga in het huisje\n2:vlucht verder het bos in")
    if (vraag == 2){
      alert ("goed, het huisje was bewoond!")
    // hier volgende vraag.
      vraag = prompt ("je ziet een auto met sleutels erin!\n1:Steel de auto en rij weg\n2:ren verder het bos in.");
      if (vraag == 1){
        alert ("goed, van al dat rennen word je moe.")
        vraag = prompt ('de tank van de auto is bijana leeg. Je bent in de buurt van een tankstation.\
        \n1: ga naar het tankstation\n2: rij door op risico.')
        if (vraag == 2){
          alert("goed, het tankstation was afgezet met politie.")
          vraag = prompt("je auto word nu gezocht en je hebt 2 keuzes.\n1: een aansteker kopen en de auto in de fik zetten\
          \n2: de auto in het water rijden.")
          if (vraag == 2){
            alert('goed, nu je auto in het water ligt zijn ze de auto kwijt.')
            vraag = prompt ('je besluit naar het buitenland te gaan.\n1: je gaat met het vliegtuig\n2: je gaat met de taxi')
            if (vraag == 1){
              alert ("goed! al zou je met de taxi gaan dan zou je opgepakt worden bij de tol.")
              vraag = prompt('je bent op schiphol en je hebt de keuze om naar:\n1:italie te gaan.\n2:Griekenland')
              if (vraag == 2){
                alert ("goed, Griekenland is nog niet op de hoogte van je ontsnapping.")
                vraag = prompt("nu je in Griekenland bent kunt je naar:\n1: Het bos\n2: het strand")
                if (vraag == 1){
                  alert ("het bos is een goede keus want je bent bedekt met bomen.")
                  vraag = prompt ("je bent nu in het bos,je ziet een luik.\n1:loop weg.\n2:ga in de luik.")
                  if (vraag == 2){
                    alert ("goed, de luik zit vol etenswaren, je hebt een slaapplek en het is onbewoond. je bent ontsnapt!")
                  } 
                  else{
                    alert ("fout, de luik zat vol etenswaren en was onbewoond.")
                    location.reload(true)
                  }
                }
                else{
                  alert ("fout, je staat in het open, iedereen kan je zien.")
                  location.reload(true)
                }
              }
              else{
                alert ("fout, ze zijn al opzoek naar je in italie.")
                location.reload(true)
              }
            }
            else{
              alert ("fout, je bent opgepakt bij de tol!")
              location.reload(true)
            }
          }
          else{
            alert('fout, als je een aansteker koopt sta je op de camera bij de winkel')
            location.reload(true)
          }
        }
        else {
          alert ("fout! het station is afgezet met politie.")
          location.reload(true)
        }
      }
      else{
        alert ("dat is te vermoeind!")
        location.reload(true)
      }
    }
    else{
      alert("fout, het huisje is bewoond, de man heeft de politie gebeld en je bent opgepakt! ")
      location.reload(true)
    }
  }
  else{
      alert("dit pad is oneindig, je had nooit ergens gekomen.")
      location.reload(true)
  }
} 
else{
    alert ("Er staan bewakers op het strand, je bent opgepakt!")
    location.reload(true)
}
