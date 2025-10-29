export class Questions{
    constructor(questions, answer, correct){
        this.questions = questions;
        this.answer = answer; 
        this.correct = correct;
    }
}

export let arrayQuiz = [
    {
        question: 'Вопрос 1: Как звали первого российского императора?',
        answerText: ["Пётр Первый", "Павел Первый", "Николай Первый", "Владимир Первый"],
        correct: 0,
    },
    {
        question: 'Вопрос 2: Какой был самый распростанённый цвет глаз у первобытных людей?',
        answerText: ["Голубой", "Зелёный", "Карий", "Серый"],
        correct: 2,
    },    
    {
        question: 'Third question',
        answerText: ["J", "K", "L", "P"],
        correct: 3,
    },
    {
        question: 'First question',
        answerText: ["A", "B", "C", "D"],
        correct: 1,
    },
    {
        question: 'Second question',
        answerText: ["Z", "X", "C", "V"],
        correct: 0,
    },    
    {
        question: 'Third question',
        answerText: ["J", "K", "L", "P"],
        correct: 3,
    },
    {
        question: 'First question',
        answerText: ["A", "B", "C", "D"],
        correct: 1,
    },
    {
        question: 'Second question',
        answerText: ["Z", "X", "C", "V"],
        correct: 0,
    },    
    {
        question: 'Third question',
        answerText: ["J", "K", "L", "P"],
        correct: 3,
    },
    {
        question: 'First question',
        answerText: ["A", "B", "C", "D"],
        correct: 1,
    },
]