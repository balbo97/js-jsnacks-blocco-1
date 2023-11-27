// 1- CREIAMO UN ARRAY CHIEDENDO ALL'UTENTE QUNTI ELEMENTI DOVRA' CONTENERE 

let array_length = parseInt(prompt('inserisci il numero di elementi che vuoi contenere nell array'))

let array =[]
for (let i=0; i<array_length; i++){
 // CREO UN NUMERO RANDOM DA 1 A 100
 num = Math.floor((Math.random() * 100) + 1);
 
 //AGGIUNGO IL NUMERO NELL ARRAY
 array.push(num)
}

if (array_length >= 5){

    // INVERTO L'ARRAY 
    array.reverse()
    
    // CREO UN' ALRA ARRAY CONTENENTE GLI ULTIMI 5 NUMERI DELLA ARRAY PRECEDENTE 
    let last_5 = array.slice(0,5);
    
    // STAMPO IN CONSOLE LA NUAVA ARRAY 
    console.log(last_5)
}
else{
    console.log(array)
}