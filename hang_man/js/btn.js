'use strict'

const BTN = document.getElementById('btn');
const GAME = document.getElementById('game');
let count = 0;
import { runningGame } from './quizGame.js';

function btnOff(){//ボタンのスタイルをオフモードにする
  BTN.disabled = "true";
  BTN.classList.add('btnOff');
  BTN.classList.remove('btnOn');
}

export function btnOn(){//ボタンのスタイルをオンモードにする
  BTN.disabled = "false";
  BTN.classList.add('btnOn');
  BTN.classList.remove('btnOff');
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
