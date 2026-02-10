// 1
const isEven = (a) => {
    if (a % 2 === 0){
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(isEven(10))

// 2
const reverseString = (str) => {
    return str.split("").reverse().join("");
}
console.log(reverseString("Aviral Srivastava"))

// 3
const avgMarks = (marks) => {
    let total = 0;
    for(let mark of marks){
        total += mark;
    }
    avg = total / marks.length;
    if (avg >= 40){
        return "Pass"
    } else {
        return "Fail"
    }
}
console.log(avgMarks([50,60,70,80,90]))