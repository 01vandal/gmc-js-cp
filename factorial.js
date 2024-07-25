

function factorial(num) {
    let i = num
    let fac = 1
    while (i > 0){
        fac *= i
        i--
    }
    return fac
}


console.log(factorial(3));
console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(8));
