const rs =require('readline-sync');
const chalk = require('chalk');

console.log(chalk.cyan.bold("\n*** Welcome to The MJ Game System ***"));
var playerName = rs.question("\nHello What is Your Name :- ");
console.log(chalk.green(`${playerName} , Welcome to The Game \n`));

var score = 0;
function gamePlay(questions , A , B , C , D, correctAnswer){
    console.log(chalk.cyanBright(questions));
    console.log("A :"+A);
    console.log("B :"+B);
    console.log("C :"+C);
    console.log("D :"+D);
    var answer  = rs.question(chalk.magenta("Answer in Option : -"));
    if(answer.toUpperCase() == correctAnswer){
        console.log(chalk.green('\t:-) Correct Answer'));    
        score = score+5;
    }
    else{
        console.log(chalk.red('\t:-( Wrong Answer'));    
        if(correctAnswer === "A")
        {
            correctAnswer=A;
        }else if(correctAnswer === "B")
        {
            correctAnswer=B;
        }else if(correctAnswer === "C")
        {
            correctAnswer=C;
        }else if(correctAnswer === "D")
        {
            correctAnswer=D;
        }
        console.log(chalk.greenBright("Correct Answer is: "+correctAnswer));
        score = score-2;
    }
        console.log(chalk.cyan('Your score is  :' + score));    
        console.log(chalk.gray('\n****************************************************************\n'));    
} 
//creating qus answer 
var one = {
    qus:"National Science Day is celebrated to honor which Nobel Prize winner scientist ?",
    A:"Abdul Kalam",
    B:"C.V. Raman",
    C:"Vikram Sarabhai",
    D:"Homi J Bhabha",
    ans:"B"
};
var two = {
    qus:"Which US President initially worked to abolish slavery in the country ?",
    A:"ItanJohn F. Kennedyagar",
    B:"Richard Nixon",
    C:"Abraham Lincoln",
    D:"Ronald Reagon",
    ans:"C"
};
var three = {
    qus:"International Development Week is an initiative by which country ?",
    A:"France",
    B:"USA",
    C:"India",
    D:"Canada",
    ans:"D"
};
var four = {
    qus:"Who was the first woman Governor of India ? ",
    A:"Vijay Lakshmi Pandit",
    B:"Sarojini Naidu",
    C:"Kamaladevi Chattopadhyay",
    D:"None of the Above",
    ans:"B"
};
var five = {
    qus:"When is the World Wildlife Day observed every year ?",
    A:"August 12",
    B:"September 6",
    C:"March 3",
    D:"November 20",
    ans:"C"
};
var six = {
    qus:"India’s Ordnance Factory is at which position in the world for defense equipment manufacturing ?",
    A:"24",
    B:"41",
    C:"50",
    D:"37",
    ans:"D"
};
var seven = {
    qus:"Which United States President introduced the idea of Consumer Rights ?",
    A:"George W.Bush",
    B:"Richard Nixon",
    C:"John F Kennedy",
    D:"Franklin D.Roosevelt",
    ans:"C"
};
var eight = {
    qus:"Till 1912, Bihar was a part of which state ?",
    A:"Uttar Pradesh",
    B:"Jharkhand",
    C:"Bengal",
    D:"Odisha",
    ans:"C"
};
var nine = {
    qus:"The discovery of the Polio vaccine was made by which country ?",
    A:"India",
    B:"China",
    C:"Russia",
    D:"USA",
    ans:"A"
};
var ten = {
    qus:"International Mathematics Day is to celebrate which mathematics constant ?",
    A:"Euler’s number",
    B:"Pi",
    C:"Imaginary Unit",
    D:"All of the above",
    ans:"B"
};
//calling function
qusArray = [one,two,three,four,five,six,seven,eight,nine,ten];
for(let i =0 ; i<qusArray.length;i++){
    gamePlay(qusArray[i].qus,qusArray[i].A,qusArray[i].B,qusArray[i].C,qusArray[i].D,qusArray[i].ans);
}
console.log(chalk.yellow(`Hey ! ${playerName}`,'\n*****  Your Final score is  : ' + score +   "  *****\n"));    