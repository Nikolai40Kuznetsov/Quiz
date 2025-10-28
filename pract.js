import { Questions } from "./pract2.js";
import { arrayQuiz } from "./pract2.js"

const start_but = document.getElementById('start_but');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const quest1 = document.getElementById('quest1');
const answersBut = Array.from(document.getElementsByClassName("answer"));
const backBut = document.getElementById("back");
const scoreText = document.getElementById("score");
let score = 0;

let arrayObject = [];
for(let i = 0; i < arrayQuiz.length; ++i){
    arrayObject[i] = new Questions(arrayQuiz[i].question, arrayQuiz[i].answerText, arrayQuiz[i].correct);
}

function quest(j){
    quest1.textContent = arrayObject[j].questions;
    for(let i = 0; i < answersBut.length; ++i){
        answersBut[i].textContent = arrayObject[j].answer[i];
        answersBut[i].onclick = function(){
            if(arrayObject[j].correct === i){
                console.log('good');
                score += 1;
            } else{
                console.log("not good");
            }

            if(j < arrayObject.length - 1){
                quest(++j);
            } else{
                endQuiz();
            }
        }
    }  
}

function start_quiz(){
    block2.style.display = 'block';
    block1.style.display = 'none';
    quest(0);
}

function endQuiz(){
    scoreText.textContent = `Ваш счёт: ${score}`;
    block2.style.display = 'none';
    block3.style.display = 'block';

}

function backMain(){
    block1.style.display = 'block';
    block3.style.display = 'none';
    score = 0;
}



start_but.addEventListener('click', start_quiz);
backBut.addEventListener('click', backMain);