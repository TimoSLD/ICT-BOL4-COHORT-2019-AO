{
  alert("Welkom bij Prison Escape!");
}
 
var naam = prompt("Wat is uw naam?");
var naam = alert (' welkom ' +naam+ ', leuk dat je deze game speelt');

var vraag1 = prompt("je staat op het punt om te ontsnappen uit de gevangenis. \
Je komt terecht op een punt dat je naar het bos of strand kunt gaan\n1: ga het bos in.\n2:ga naar het strand.")

if (vraag1 == 1){
    alert("Goed, op het strand staan bewakers.")
} else if (vraag1 == 2) {
  alert("Er staan bewakers op het strand, je bent opgepakt!")
  location.reload (true)
}
if (vraag1 == 1){
  var vraag2 = prompt("je bent nu in het bos en je komt op een pad terecht die in tweeen splitst. je kan naar rechts en links.\n1: ga naar rechts.\n2:ga naar links")
}
  if (vraag2 == 1){
    alert ("goed, het linkerpad is oneindig, je had nooit ergens uitgekomen.")
  } else if (vraag2 == 2){
    alert ("dit pad is oneindig, je had nooit ergens gekomen.")
    location.reload(true)
  }

  if (vraag2 == 1){
    var vraag3 = prompt("je ziet een huisje.\n1: ga in het huisje\n2:vlucht verder het bos in")
  }
    if (vraag3 == 1){
      alert ("fout, het huisje is bewoond, de man heeft de politie gebeld en je bent opgepakt! ")
      location.reload (true)
    } else if (vraag3 == 2){
      alert ("goed, het huisje was bewoond!")
    }
    if (vraag3 == 2){
      var vraag4 = prompt ("je ziet een auto met sleutels erin!\n1:Steel de auto en rij weg\n2:ren verder het bos in.")
    } 
      if (vraag4 == 1){
        alert ("goed, van al dat rennen word je moe.")
      } else if (vraag4 == 2){
        alert ("dat is te vermoeind!")
        location.reload (true)
      }

      if (vraag4 == 1){
        var vraag5 = prompt ("de tank van de auto is bijana leeg. Je bent in de buurt van een tankstation.\n1: ga naar het tankstation\n2: rij door op risico.")
      }
        if (vraag5 == 1){
          alert ("fout! het station is afgezet met politie.")
          location.reload(true)
        } else if (vraag5 == 2){
          alert ("goed, het tankstation was afgezet met politie.")
        } 

        if (vraag5 == 2){
          var vraag6 = prompt ("je auto word nu gezocht en je hebt 2 keuzes.\n1: een aansteker kopen en de auto in de fik zetten\n2: de auto in het water rijden.")
        }
          if (vraag6 == 1){
            alert ("fout, als je een aansteker koopt sta je op de cmaera bij de winkel")
            location.reload (true)
          } else if (vraag6 == 2){
            alert ("goed, nu je auto in het water ligt zijn de de auto kwijt.")
          }
    

            if (vraag6 == 2){
              var vraag7 = prompt("je besluit naar het buitenland te gaan.\n1: je gaat met het vliegtuig\n2: je gaat met de taxi")
            }
              if (vraag7 == 1){
                alert ("goed! al zou je met de taxi gaan dan zou je opgepakt worden bij de tol.")
              } else if (vraag7 == 2){
                alert ("fout, je bent opgepakt bij de tol!")
                location.reload(true)
              }

              if (vraag7 == 1){
                var vraag8 = prompt("je bent op schiphol en je hebt de keuze om naar:\n1:italie te gaan.\n2:Griekenland")
              }
                if (vraag8 == 1){
                  alert ("fout, ze zijn al opzoek naar je in italie.")
                  location.reload(true)
                } else if (vraag8 == 2){
                  alert ("goed, Griekenland is nog niet op de hoogte van je ontsnapping.")
                }

                if (vraag8 == 2){
                  var vraag9 = prompt("nu je in Griekenland bent kunt je naar:\n1: Het bos\n2: het strand")
                }

                   if (vraag9 == 1){
                    alert ("het bos is een goede keus want je bent bedekt met bomen.")
                  } else if (vraag9 == 2){
                    alert ("fout, je staat in het open, iedereen kan je zien.")
                    location.reload(true)
                  }

                  if (vraag9 == 1){
                    var vraag10 = prompt("je bent nu in het bos,je ziet een luik.\n1:loop weg.\n2:ga in de luik.")
                  }
                    if (vraag10 == 1){
                      alert ("fout, de luik zat vol etenswaren en was onbewoond.")
                      location.reload
                    } else if (vraag10 == 2){
                      alert ("goed, de luik zit vol etenswaren, je hebt een slaapplek en het is onbewoond. je bent ontsnapt!")
                    }

                    if (vraag10 == 2){
                      alert("je hebt de game uitgespeeld! klik op OK/ENTER om het opnieuw te spelen.")
                      location.reload(true)
                    }