var textbox = woord;


    function check(){

        var textbox = document.getElementById('woord');

        var woord = textbox.value;

        var woordArray = woord.split('');

        var letter = document.getElementById('letter').value;



        for(i=0; i< woordArray.length; i++){

            if(woordArray[i] == letter){

                var kop = document.createElement('h1');

                kop.innerText = ' letter ' + letter + ' gevonden op plek ' + i;

                document.body.appendChild(kop);

            }

        }

    }