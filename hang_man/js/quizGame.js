'use strict'

import { serveOneQuiz } from './question.js';
const ANSWER = document.getElementById('answer');
let questionCount = 0;
let CURRENT_QUIZ;

export function runningGame (){
  CURRENT_QUIZ = serveOneQuiz(questionCount);
  setQuestion();
}


function setQuestion() {
  ANSWER.textContent = "_".repeat(CURRENT_QUIZ.a.length);
}
