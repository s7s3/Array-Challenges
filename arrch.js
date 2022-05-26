// 1. Always Hungry
function alwaysHungry(arr) {
    var found = 0;
    for (var i = 0; i <arr.length; i++){
        if (arr[i] == "food"){
            found++;
            console.log("yummy");
        }
    }
    if (found == 0){
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);


//2.High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var x = 0; x < arr.length ; x++){
        if (arr[x] > cutoff){
            filteredArr.push(arr[x]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

//3.Better than average
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for (var i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    sum = sum / arr.length;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > sum){
            count++;
        }
    }
    
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


//4.Array Reverse
function reverse(arr) {
    for(var i = arr.length-1 ; i > 0 ; i--){
        arr.splice(i, 0, arr.shift());
    }
return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 

// 5.Fibonacci Array
function fibonacciArray(n) {
    
    var fibArr = [0, 1];
    for (let i = 0 ; i < n-2 ; i++){
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);