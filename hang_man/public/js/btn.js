'use strict'

import { initializationGame } from './quizGame.js';
const BTN = document.getElementById('btn');
const GAME = document.getElementById('game');
let count = 0;

function btnOff(){//ボタンのスタイルをオフモードにする
  BTN.disabled = "true";
  BTN.classList.add('btnOff');
  BTN.classList.add('btnHidden')
  BTN.classList.remove('btnOn');
  return;
}

export function btnOn(){//ボタンのスタイルをオンモードにする
  count++;
  BTN.textContent = "次の問題へ";
  BTN.disabled = false;
  BTN.classList.add('btnOn');
  BTN.classList.remove('btnOff');
  BTN.classList.remove('btnHidden');
  return;
}

function removeHidden(){//ゲーム画面を出力する
  GAME.classList.remove('hidden');
  return;
}

BTN.addEventListener('click', () => {
  btnOff();
  initializationGame();
  if(count===0){
    removeHidden();
  }
});
