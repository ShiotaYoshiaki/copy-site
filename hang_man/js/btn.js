'use strict'

const BTN = document.getElementById('btn');
const GAME = document.getElementById('game');
let count = 0;
import { runningGame } from './quizGame.js';

function btnOff(){//ボタンのスタイルをオフモードにする
  btn.disabled = "true";
  btn.classList.add('btnOff');
  btn.classList.remove('btnOn');
}

function btnOn(){//ボタンのスタイルをオンモードにする
  btn.disabled = "false";
  btn.classList.add('btnOn');
  btn.classList.remove('btnOff');
}

function removeHidden(){//ゲーム画面を出力する
  GAME.classList.remove('hidden');
}

BTN.addEventListener('click', () => {
  btnOff();
  if(count===0){
    BTN.textContent = "次の問題へ";
    removeHidden();
    runningGame();
  }
});
