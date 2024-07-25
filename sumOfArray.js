

function sum(arr) {
    sum = 0
    for (i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}


console.log(sum([1, 5, 3, 66, 33, 99, 0.1, 55, 6, 3, 553, 343, 43, 3, 5, 2, 5, 6, 3, 6, 4, 6, 2 , 8, 9, 99, 5]));