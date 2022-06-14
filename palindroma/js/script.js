// Chiedere all’utente di inserire una parola
// Creare una funzione per 
// capire se la parola inserita è palindroma

// Chiedere una parola all'utente
const userWord = prompt('Dimmi una parola');

// Capire se è palindroma tramite una funzione
const isUserWordPalindrome = isWordPalindrome(userWord);
console.log(isUserWordPalindrome);

// Se è palindroma scrivere 'ok è palindroma' altrimenti 'non è palindroma'
let userMessage;
if(isUserWordPalindrome) {
    userMessage = 'ok è palindroma';
} else {
    userMessage = 'non è palindroma';
}
alert(userMessage);

// --------------------
// FUNCTIONS
// --------------------

// Funzione che valuta se una parola è palindroma
// originalWord -> stringa, parola originale
// return: booleano, true se la parola è palindroma, altrimenti false
function isWordPalindrome(originalWord) {
    // Ottenere una stringa che rappresenti la parola al contrario:
    // una stringa vuota e leggere la parola al contrario con un ciclo for
    // per ogni lettera -> la aggiungo alla stringa vuota
    let reverseWord = '';
    for(let i = originalWord.length - 1; i >= 0; i--) {
        const thisLetter = originalWord[i];
        reverseWord += thisLetter;
    }

    // se la parola al contrario === parola originale torno true altrimenti false
    let isPalindrome;
    if(originalWord === reverseWord) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    return isPalindrome;
}