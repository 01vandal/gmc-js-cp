

function fibonacci(depth) {
    if (depth == 0 || depth == 1){
        return 0
    } else if ( depth == 2) {
        return 1
    }


    arr = [0, 1]
    for (let i=0; i < depth - 2; i++){
        arr.push(null)
    }
    // console.log(arr)
    for (let i = 2; i < depth ; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }

    // console.log(arr)
    return arr
}
console.log(fibonacci(10));
console.log(fibonacci(12));
console.log(fibonacci(15));
console.log(fibonacci(20));
