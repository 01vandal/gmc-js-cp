

function cap(phrase) {
    let sentence = phrase.split(' ')
    let capitalized = new Array()
    for (i = 0; i < sentence.length; i++){
        // console.log(sentence[i][0] + sentence[i].slice(1));
        capitalized.push(sentence[i][0].toUpperCase() + sentence[i].slice(1))
    }
    return capitalized.join(' ')
}


console.log(cap("hello gomycode!"))