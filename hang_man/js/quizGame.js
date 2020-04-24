'use strict'

import { serveOneQuiz } from './question.js';
const ANSWER = document.getElementById('answer');
const HINT_LIST = document.getElementById('hintList');
const INPUT_BTN = document.getElementById('inputBtn');
const INPUT_ANSWER = document.getElementById('inputAnswer')
let questionCount = 0;
let mistakeCount = 0;
let CURRENT_QUIZ;

export function runningGame (){
  CURRENT_QUIZ = serveOneQuiz(questionCount);
  setQuestion();
  setHint(mistakeCount);
}

function setQuestion() {//問題をセットする
  ANSWER.textContent = "_".repeat(CURRENT_QUIZ.a.length);
}

function setHint(i) {//ヒントを追加する
  const NEW_HINT = document.createElement('li');
  NEW_HINT.textContent = CURRENT_QUIZ.h[i];
  HINT_LIST.appendChild(NEW_HINT);
}

function setAnswer(i,char){
  ANSWER.textContent = re
}

function judgment(char){
  var correct = false;
  for(let i=0;i<CURRENT_QUIZ.a.length;i++){
    if(CURRENT_QUIZ.a.charAt(i)===char){

    }
  }
}

INPUT_BTN.addEventListener('click', () => {
  
});