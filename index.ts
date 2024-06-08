import inquirer from "inquirer"

// 1) computer wil generate a random number
let computerGeneratedNumber = Math.floor (Math.random() *5+1)
// console.log(computerGeneratedNumber);
// 2) user input for guessing number 

// 3) compare user input with computer generated number and show result

const answers = await inquirer.prompt([ 
    {
        type: "number",
        message:"choose a number between 1 and 5",
        name: "userguessnumber",

    }
])
// console.log(answers.userguessnumber);
if (computerGeneratedNumber === answers.userguessnumber){
    console.log("congratulation you win")
}
else {
    console.log( "unfortunately you lose");
    
}