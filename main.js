/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let arrayNumRand = []
let h2Random = document.getElementById('random')
let arrayNumUtente = []

function generaNumRandom(){

    for( let i=0; i<5; i++){

        let numeroRandom = Math.floor( Math.random() *10 ) +1
        arrayNumRand.push(numeroRandom)
        
    }

    h2Random.innerHTML = `I numeri random sono: ${arrayNumRand}`
    
}


function start(){    
    generaNumRandom()

    setTimeout( function(){
        h2Random.innerHTML = ''             
    },2000)

    setTimeout( function(){
        for(let i=0; i<5; i++){
            let numUtente = parseInt(prompt('inserisci il numero random'))
            arrayNumUtente.push(numUtente)
        }
        console.log(arrayNumUtente)

                     
    },2020)




    
    

    

}




