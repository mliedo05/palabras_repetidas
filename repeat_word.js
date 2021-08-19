let letters = document.getElementById('texto-entrada').textContent.toLowerCase().replace(/[0-9.,:\r\s]/gm, " ").replaceAll(" ", "");



function repWords(text) {
    w = text.split("");
    return w;
}
let variable = repWords(letters);

function countLetters(text){
    let repw = text
    let duplicates_letters = [];
    let matchedElements = [];
    for (let i = 0; i < repw.length; i++){
        let num = repw[i];
        let duplicates = 0;
        for (let z = 0; z < repw.length; z++){
            if(num === repw[z] && !matchedElements.includes(num)){
                duplicates++;
            }
        }
        matchedElements.push(num);
        if (duplicates > 0){
            duplicates_letters.push(`${num} ${duplicates}`)
        }   
    }
    for (let x= 0; x < duplicates_letters.length; x++ ){
        document.getElementById('resultados_letras').innerHTML += duplicates_letters[x] + "<br>"
    }
    return duplicates_letters
}
console.log(countLetters(repWords(letters)))

function countwords(){
    let words = document.getElementById('texto-entrada').textContent.toLowerCase().replace(/[0-9.,:\r\s]/gm, " ").split(" ");

    words = words.filter(word => word.length > 1) 

    let repw = words
    let duplicates_word = [];
    let matchedElements = [];
    for (let i = 0; i < repw.length; i++){
        let num = repw[i];
        let duplicates = 0;
        for (let z = 0; z < repw.length; z++){
            if(num === repw[z] && !matchedElements.includes(num)){
                duplicates++;
            }
        }
        matchedElements.push(num);
        if (duplicates > 0){
            duplicates_word.push(`${num} ${duplicates}`)
        }
    }
    for (let x= 0; x < duplicates_word.length; x++ ){
        document.getElementById('resultados_palabra').innerHTML += duplicates_word[x] + "<br>"
    }
    return duplicates_word
}
console.log(countwords())