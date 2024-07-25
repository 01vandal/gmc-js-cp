

function isPrime(num) {
    if (num <= 1){
        return false
    }
    if (num <= 3){
        return true
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false
    }
    for (i = 5; i*i <= num; i+= 6){
        if (num % i === 0 || num % (i-2) === 0 || num % (i+2) === 0){
            return false
        }
    }


    return true
}


console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(14));
console.log(isPrime(41));
console.log(isPrime(43));
console.log(isPrime(72));
console.log(isPrime(93));
