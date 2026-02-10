// question
uiTeam = ["Aviral", "Ajay", "Ankit", "Anshul"];
flutterTeam = ["Amit", "Anshul", "Ankit", "Ajay"];

function  showMenu(){
    console.log("Menu");
    console.log("Team 1: " + uiTeam);
    console.log("Team 2: " + flutterTeam);
    console.log(...uiTeam, ...flutterTeam); 
}
function display(team){
    switch(team){
        case "ui":
            console.log("UI Team: " + uiTeam);
            break;
        case "flutter":
            console.log("Flutter Team: " + flutterTeam);
            break;
        default:
            console.log("Full Team: " + [...uiTeam, ...flutterTeam]);
    }
}
showMenu();
console.log("-------------")
display("ui");
console.log("-------------")
display("flutter");
console.log("-------------")
display("full");