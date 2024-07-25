

function count(str) {
    return str.length
}


function count_two(str) {
    // for loop to apply the bootcamp's lessons
    let L = 0
    for (i=0; i < str.length; i++) {
        L++
    }
    return L
}

console.log(count_two('hello'));
console.log(count_two('ibrahim'));
console.log(count_two('gomycode'));
