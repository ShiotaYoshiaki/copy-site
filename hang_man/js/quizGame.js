'use strict'

import { serveOneQuiz } from './question.js';
import { btnOn } from './btn.js';
const ANSWER = document.getElementById('answer');
const HINT_LIST = document.getElementById('hintList');
const MISTAKE_LIST = document.getElementById('mistakeList');
const INPUT_BTN = document.getElementById('inputBtn');
const INPUT_ANSWER = document.getElementById('inputAnswer')
const HANG_MAN = document.getElementById('hangMan');
const HANG_MANS_SRC = new Array("../images/h2.png","../images/h3.png","../images/h4.png","../images/h5.png","../images/h6.png","../images/h7.png","../images/h8.png","../images/h9.png");
let questionCount = 0;
let mistakeCount;
let correctCount;
let CURRENT_QUIZ;
let answerCopy;
let point = 0;


export function initializationGame (){
  correctCount = 0;
  mistakeCount = 0;
  CURRENT_QUIZ = serveOneQuiz(questionCount);
  setQuestion();
  clearHint();
  clearMistake();
  setHint(mistakeCount);
  addHangMan(mistakeCount);
  return;
}

function setQuestion() {//問題をセットする
  answerCopy = "_".repeat(CURRENT_QUIZ.a.length);
  ANSWER.textContent = answerCopy;
  return;
}

function setHint(i) {//ヒントを追加する
  const NEW_HINT = document.createElement('li');
  NEW_HINT.textContent = CURRENT_QUIZ.h[i];
  HINT_LIST.appendChild(NEW_HINT);
  return;
}

function setMistakeList(char) {//間違え文字を追加する
  const NEW_MIS = document.createElement('li');
  NEW_MIS.textContent = char;
  MISTAKE_LIST.appendChild(NEW_MIS);
  return;
}

function clearHint(){//ヒントリストを削除
  while(HINT_LIST.hasChildNodes()){
    HINT_LIST.removeChild(HINT_LIST.firstChild);
  }
}

function clearMistake(){//間違え文字リストを削除
  while(MISTAKE_LIST.hasChildNodes()){
    MISTAKE_LIST.removeChild(MISTAKE_LIST.firstChild);
  }
}

function setAnswer(i,char){//i番目の文字を表示する
  answerCopy = answerCopy.substr(0,i) + char + answerCopy.substr(i+1,answerCopy.length-i);
  ANSWER.textContent = answerCopy;
  return;
}

function addHangMan(i){//hangman追記
  HANG_MAN.src=HANG_MANS_SRC[i];
  return;
}

function addPoint(i){
  switch (i){
    case 0:
      return 10;
    case 1:
      return 7;
    case 2:
      return 5;
    case 3:
      return 4;
    case 4:
      return 3;
    case 5:
      return 2;
    case 6:
      return 1;
  }
}

function resultAnnouncement(){
  document.getElementById('arrivalQuestion').textContent = `${questionCount}問クリア`;
  document.getElementById('quizPoint').textContent = `得点: ${point}点`;
  document.getElementById('result').classList.remove('resultHidden');
}

function judgment(char){//回答を判定
  var correct = false;
  for(let i=0;i<CURRENT_QUIZ.a.length;i++){
    if(CURRENT_QUIZ.a.charAt(i)===char){
      correctCount++;
      setAnswer(i,char);
      correct=true;
    }
  }
  if(correct){
    if(correctCount===CURRENT_QUIZ.a.length){//全て正解したとき
      btnOn();
      questionCount++;
      point += addPoint(mistakeCount);
      return;
    }
  }else{
    mistakeCount++;
    if(mistakeCount===7){//HangManが完成したとき
      resultAnnouncement();
    }
    setHint(mistakeCount);
    setMistakeList(char);
    addHangMan(mistakeCount);
  }
}

INPUT_BTN.addEventListener('click', () => {
  judgment(INPUT_ANSWER.value);
  INPUT_ANSWER.value = '';
  INPUT_ANSWER.focus();
});