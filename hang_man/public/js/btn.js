'use strict'


const BTN = document.getElementById('btn');
const GAME = document.getElementById('game');
let count = 0;

function btnOff(){
  btn.disabled = "true";
  btn.classList.add('btnOff');
  btn.classList.remove('btnOn');
}

import { removeHidden } from "./game.js";

BTN.addEventListener('click', () => {
  btnOff();
  if(count===0){
    BTN.textContent = "次の問題へ";
    removeHidden();
  }
});
