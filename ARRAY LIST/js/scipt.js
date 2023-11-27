// 1- CREARE L'ARRAY CON LA FRUTTA NEL FRIGORIFERO

let array = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

// 2- AGGIUNGERE LA PESCA NELL' ARRAY

array.push('pesca')

// DEFINISCO LA VARIABILE FLAG CHE MI OCCORRERA NEL CICLO FOR 
let flag = false;  

// 3- VERIFICARE CHE NELL' ARRAY C'E' IL COCOMERO

for (let i=0; i<array.length; i++){
    
    if (array[i] == 'cocomero'){
        flag = true 
    }

}

// MOSTRO IL MESSAGGIO NEL console.LOG 
if(flag){
    console.log('Trovato!! Devo solo preparare il cocktail.')
}
else{
    console.log('Oh no, devo uscire a comprare il cocomero!')
}