// // What is call stack and event loop?

// // Call stack is a data structure that keeps track of the function calls in a program. It is a stack data structure that follows the Last In First Out (LIFO) principle. When a function is called, it is added to the call stack. When the function returns, it is removed from the call stack.

// // Event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations. It is responsible for handling asynchronous operations in JavaScript. The event loop continuously checks the call stack and the message queue. If the call stack is empty, it takes the first message from the message queue and pushes it onto the call stack for execution. This allows JavaScript to handle multiple tasks concurrently without blocking the main thread.

// console.log("First");
// console.log("Second");
// console.log("Third");

// console.log("__Above code is synchronous, so it will be executed in order__");
// console.log("__Below code is asynchronous, so it will not be executed in order__");

// // In the above code, the call stack will execute the console.log statements in order. The event loop will not come into play here as there are no asynchronous operations. However, if we were to add an asynchronous operation, such as setTimeout, the event loop would handle it and allow the main thread to continue executing other tasks while waiting for the asynchronous operation to complete.

// console.log("First");
// // any asynchronous operation like setTimeout, fetch, etc. will be handled by the event loop, hence waiting for it to complete before executing the next line of code
// setTimeout(() => {
//     console.log("Second");
// }, 1000);
// console.log("Third");
// for(let i=0; i<10000; i++){
//     console.log("-"); // this will block the main thread and delay the execution of the setTimeout callback, hence "Second" will be logged after "Third"
// }

// // In the above code, the call stack will execute the first console.log statement and then move on to the setTimeout function. The setTimeout function will be added to the message queue and the call stack will continue executing the next console.log statement. After 1 second, the event loop will take the setTimeout callback from the message queue and push it onto the call stack for execution, resulting in "Second" being logged after "Third".
// // print order will be First, Third, Second

// let count = 0;
// let id = setInterval(() => {
//     console.log("Hello");
//     count++;
//     if(count === 5){
//         clearInterval(id); // this will stop the setInterval from executing further after 5 times
//     }
// }, 1000);

// // In the above code, the setInterval function will be added to the message queue every 1 second. The event loop will continuously check the message queue and push the setInterval callback onto the call stack for execution. The count variable will keep track of how many times the setInterval has executed, and once it reaches 5, the clearInterval function will be called to stop further execution of the setInterval callback.

// Callback is a function that is passed as an argument to another function and is executed after some operation has been completed. It is a way to handle asynchronous operations in JavaScript. Callbacks can lead to callback hell if there are multiple nested callbacks, which can make the code difficult to read and maintain. To avoid callback hell, we can use Promises or async/await syntax for better readability and maintainability of the code.
function roll(to,num,next){
    setTimeout(() => {
        console.log("roll no is: " + num);
        if (next) next();
    }, to); 
}
roll(1000,12212, () => {
    console.log("First roll is done");
    roll(2000,12213, () => {
        console.log("Second roll is done");
        roll(3000,12214, () => {
            console.log("Wait its not over yet");
            roll(4000,12215, () => {
                console.log("Almost done");
                roll(5000,12216);
            });
        });
    });
});