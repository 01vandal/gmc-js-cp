

function minMax(arr) {
    let max = arr[0]
    let min = arr[0]
    console.log(arr.length)
    for (i = 1; i < arr.length - 1; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    for (i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return `max is ${max}, min is ${min}`
}

console.log(minMax([1, 5, 3, 66, 33, 99, 0.1, 55, 6, 3, 553, 343, 43, 3, 5, 2, 5, 6, 3, 6, 4, 6, 2 , 8, 9, 99, 5]));