'use strict'

const GAME = document.getElementById("game");

export function removeHidden() {//隠し要素を出現させる
  GAME.classList.remove("hidden");
}
