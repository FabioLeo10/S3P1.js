/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1,num2){
    if(num1 === num2){
        return (num1+num2)*3
    } else {
        return num1 + num2
    }
}
console.log(crazySum(16,207))


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num){
    if((num > 20 && num <= 100) || num === 400){ return true } else { return false }
}
console.log(boundary(399))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(String){
   return String.split('').reverse().join('');
}
console.log(reverseString('CIAO'))

/* ESERCIZIO 4 // {} []
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){
    const array = []
    for (let i = 0; i <= n; i++) {
        array.push(Math.floor(Math.random()* 10))
        return array
    }
}
console.log(giveMeRandom(6))
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2){
    let somma = l1 * l2
    return somma
}
console.log(area(20, 5))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
function crazyDiff(a, b){
    let sum = a - b;
    if(sum > 19){
        return sum * 3
    }
}
console.log(crazyDiff(50, 19))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(stringa1){
    if (stringa1.startsWith('code')) {
        return stringa1
      }else return 'code' + stringa1
}
console.log(codify('coders'))
console.log(codify(' alla vaccinara'))



/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function chech3and7(intero){
    if(intero % 3 === 0||intero % 7 === 0 ){
        return true
    } else {return false}
}
console.log(chech3and7(21))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(str){
    return str.slice(1, 4)
}
console.log(cutString('Aiuto'))