'use strict'

{
  const btn = document.getElementById('btn');
  const game = document.getElementById('game')
  let count = 0;
  
  function btnOff(){
    btn.disabled = "true";
    btn.classList.add('btnOff');
    btn.classList.remove('btnOn');
  }


  if(count===0){
    btn.addEventListener('click', () => {
      btnOff();
      btn.textContent('次の問題へ');
      game.classList.remove('hidden')
    });
  }
  
}
