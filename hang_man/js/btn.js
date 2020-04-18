'use strict'

{
  const BTN = document.getElementById('btn');
  const GAME = document.getElementById('game')
  let count = 0;
  
  function btnOff(){
    btn.disabled = "true";
    btn.classList.add('btnOff');
    btn.classList.remove('btnOn');
  }
  
  if(count===0){
    BTN.addEventListener('click', () => {
      btnOff();
      BTN.textContent('次の問題へ');
      import {removeHidden} from "game.js"
      removeHidden();
    });
  }
  
}
