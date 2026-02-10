// function add(...nums){     // ... is rest operator that collects all the arguments into an array called nums
//     let total = 0;
//     for(let num of nums){
//         total += num;
//     }
//     return total;
    
// }
// console.log(add(1,2,3,4,6));

let a = [1,2,3,34,45,88];
let [first, sec, last] = a; //destructuring assignment
console.log(first, sec, last)

let [x,y,...rest] = a; //rest operator to collect remaining values in an array called rest
console.log(x,y,...rest) // using spread operator to print rest of the values in array
// on left side of assignment, ... is rest operator, on right side of assignment, ... is spread operator
// rest operator collects remaining values into an array, spread operator spreads the values of an array into individual elements

let arr1 = [1,2,3];
let arr2 = [...arr1]; //spread operator to copy arr1 into arr2
console.log(arr2)

let arr3 = [...arr1,4,5,6]; //spread operator to copy arr1 and add more values
console.log(arr3)

// best example of rest and spread operator is in function arguments
function test(...args){ // rest operator to collect all arguments into an array called args
    console.log(args)
}
let arr4 = [1,2,3,4,5];
test(...arr4) //spread operator to pass array elements as individual arguments to function


