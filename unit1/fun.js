//(function show(){
//  console.log("Welcome to CSB")
//})(); //immidieately invoke function expression (IIFE)

(() => {
 console.log("arrow function anon, iife")
})(); //called using iife

const a= () => {
 console.log("arrow function non anon")
}
a();



// arrow function dont have "this", it borrows from surrounding (like this.age will go to this.age of parent fn
// this will raise error

//function person(){
//  this.age  = 25;

//  setTimeout(function () {
//    console.log(this.age);
//  }, 1000);
//}
//new person();

function person2() {
  this.age = 25;

  setTimeout( () => {
    console.log(this.age);
  }, 1000);
}

person2();
// this will run bec of arrow function take this.age from parent function


const aa =() => {return {user: "name"}};
console.log(aa());

const bb = () => [1,2,3];
console.log(bb());


const user ={
  name: "av", age: 19,
  welcome: () => {
    console.log(`hello ${this.name}`);
    console.log(this); //shows that this is not in arrow fn, and there is no this in parent, so empty, using normal fucntion will have this
  }
};

user.welcome();
user.name = 'ajay';
user.welcome();

