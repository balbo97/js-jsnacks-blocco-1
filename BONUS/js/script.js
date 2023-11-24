// CREARE DUE ARRAY CON UN NUMERO DI ELEMENTI DIVERSI 

let array = [1,2,3,4,5,6,7,8,9,10]

let array_2 =[1,2,3,4]

// CREO UNA VARIABILE CON VALORE UGUALE AL NUMERO DI ELEMENTI CONTENUTI NELL' ARRAY
let number = array.length

let number_2 = array_2.length

// IN CASO NON SAPESSI QUANTI ELEMENTI SONO CONTENUTI NELL'ARRAY USEREI IF 
if(number > number_2){

    // FACCIO LA DIFFERENZA TRA LA PRIMA VARIABILE E LA SECONDA 

    let difference = number - number_2
    console.log(difference)

    // CREO UN CICLO CHE SI RIPETA TANTE VOLTE QUANTE LA DIFFERENZA TRA LE VARIABILI 
    for(let i=0; i<difference; i++){
        
        // AGGIUNGO UN VALORE NELL' ARRAY PER FAR SI CHE CE NE SIANO TANTI QUANTI L'ALTRO 
        let num = 1
        array_2.push(num)
    }
    
    // STAMPO IN CONSOLE 
    console.log( array, array_2)
}
else{

    // FACCIO LA DIFFERENZA TRA LA SECONDA VARIABILE E LA PRIMA 
    let difference = number_2 - number
    console.log(difference)
    
    // CREO UN CICLO CHE SI RIPETA TANTE VOLTE QUANTE LA DIFFERENZA TRA LE VARIABILI 
    for(let i=0; i<difference; i++){

        // AGGIUNGO UN VALORE NELL' ARRAY PER FAR SI CHE CE NE SIANO TANTI QUANTI L'ALTRO
        let num = 1 
        array.push(num)
    }

    // STAMPO IN CONSOLE 
    console.log( array, array_2)
}
