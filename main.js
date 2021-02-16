var touches = document.querySelectorAll('button')
var ecran= document.getElementById("ecran")
// opération sur deux nombres 
var nombre1=0
var nombre2=0
var calcul=0
var operation


for (var i=0; i <touches.length;i++){
    var touche = touches[i]
    // début de la fonction 
    var affiche  = function(){
        console.log(this.value)
        // ajoute à l'écran les valeurs des touches cliquées.
        // if ( this.value != '=' && this.value != 'Effacer' ) 
        if (Number.isInteger(parseInt(this.value)))
        {
            if ( calcul === 0)
            {
                ecran.innerHTML+=this.value
            }
            else
            {
                // efface l'opération précédente
                calcul=0
                ecran.innerHTML=this.value
            }
        }
        else
        {
            var dernier = ecran.innerText.length -1
            // la touche "Effacer"
            if (this.value == 'Effacer')
            {
                var texte_avant=ecran.innerText
                //  vérifie que l'écran n'est pas vide.
                if ( dernier > -1)
                {
                    // vide l'écran
                    ecran.innerHTML='' 
                   for ( var i=0; i<dernier;i++)
                   {
                    ecran.innerHTML+=texte_avant[i]
                   }
                }
            }
            else
            {
                if ( dernier > -1)
                {
                    var x=''
                    for ( var i=0; i<dernier+1;i++)
                    {
                        x+=ecran.innerText[i]
                    }
                    if ( nombre1 === 0 )
                    {
                        operation = this.value;
                        nombre1=parseInt(x)
                        console.log(nombre1)
                        // vide l'écran
                        ecran.innerHTML='' 
                    }
                    else
                    {
                        nombre2=parseInt(x)
                        console.log(nombre2)

                        switch(operation) {
                            case '+' :
                                calcul = nombre1 + nombre2;
                                ecran.innerHTML=calcul;
                                break;
                            case '-' :
                                calcul = nombre1 - nombre2;
                                ecran.innerHTML=calcul;
                                break;
                            case '*' :
                                calcul = nombre1 * nombre2;
                                ecran.innerHTML=calcul;
                                break;
                            case '/' :
                                calcul = nombre1 / nombre2;
                                ecran.innerHTML=calcul;
                                break;
                        }
                        nombre1=0
                        nombre2=0
                    }
                }
            }
        }
    }
    touche.addEventListener('click',affiche)
}  

