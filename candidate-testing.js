const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = ("");


//TODO: Variables for Part 2
const questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?");
}


function askQuestion(candidateAnswers) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  /*console.log(question);
  candidateAnswer = input.question("Your answer: ")
*/
  for (let i = 0; i < questions.length; i++) {
    console.log(questions[i]);
    candidateAnswers.push(input.question("Your answer: "))
  }
return candidateAnswers;

}
//askQuestion(candidateAnswers)

//console.log(candidateAnswers);




function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (candidateAnswer === correctAnswer) {
  console.log("Correct!");
} else {
  console.log("Incorrect answer.");
} */

let numCorrectAnswers = 0
let numQuizQuestions = 5

for (let i = 0; i < correctAnswers.length; i++){
  console.log("Your answer: " + (candidateAnswers[i]) + ". Correct answer: " + (correctAnswers[i]));
}

 let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()){
      numCorrectAnswers++
    }
    grade = (numCorrectAnswers / numQuizQuestions) * 100
  }
  
console.log("Your score: " + grade)
  return grade;
}
//console.log(gradeQuiz(candidateAnswers))

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " + candidateName +"!");
  askQuestion(candidateAnswers);
  gradeQuiz(candidateAnswers);
}

runProgram()

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};