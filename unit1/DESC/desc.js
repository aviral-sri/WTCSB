const student ={
    name:"Abhishek",
    age:33,
    address:{
        city:"Gzb",
        state:"UP"
    }
};
// const {name,age} = student;   //callling normally
// console.log(name, age);

// const {name:stuname,age} = student; //calling and renaming 
// console.log(stuname, age);

// const {name:stuname="Amit",age, job="None"} = student; //calling and assigning default vals
// console.log(stuname, age,job);

// using Function--

// function displayStu(object){
//     console.log(`My name is ${object.name} and age is ${object.age}`);
// }
// displayStu(student);

// function displayStu({name,age}){
//     console.log(`My name is ${name} and age is ${age}`); // it automatically fetch values of key
// }
// displayStu(student);

let numbers = [10,20,30];

let a,b,c = numbers;
console.log(a,b,c) //value is assgined to c only, a b only declared

let [d,e,f] = numbers;
console.log(d,e,f)

let [k=1,j=2, i = 3, h= 0] = numbers; //default value
console.log(k,j,i, h)

let p = 6;
let q = 7;
[p,q]= [q,p]; //swap
console.log(p,q)

let [,,z]= numbers; //ignore first 2 values
console.log(z)