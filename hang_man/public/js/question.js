const ANSWER =document.getElementById('answer');
let questionCount = 0;

const quizSet = shuffle([
      {a: 'みるくぼーい', h: ['お笑いグループ', '吉本所属の2人組', '旧称"ジン・ウオッカ"', '一人は駒場孝', 'コーンフレーク', 'インディードのCM', '2019年M-1グランプリ優勝']},
      {a: 'king gnu', h: ['音楽グループ', '旧称はSrv.Vinci', '4人グループ', '”Flash!!!”', '常田 大希', '井口', '"白日"']},
      {a: 'ながのめい', h: ['元モデルの女優', '1999年生まれ', '好きな芸人はなかやまきんに君', '映画"ひるなかの流星"で主演', '朝ドラ"半分、青い"で主演', '3年A組の茅野さくら', 'UQ mobile']},
      {a: 'twice', h: ['音楽グループ', '2015年に結成', '9人グループ', 'オーディション番組"SIXTEEN"', '韓国グループ', '日本人が3人', '"TT"']},
      {a: 'greeeen', h: ['音楽グループ', '4人グループ', 'グループの生い立ちが映画化', 'メンバー全員歯科医師', '素顔は非公開', '"愛唄"', '"キセキ"']},
      {a: 'よねづげんし', h: ['ソロ歌手', '本名で活動', '徳島県出身', '別称"ハチ"', '菅田将暉とコラボ', 'アンナチュラルの主題歌', '"Lemon"']},
      {a: 'かまいたち', h: ['お笑いグループ', '"和牛"と同期', 'キングオブコント2017 優勝', 'M-1グランプリ2019 準優勝', '低身長の山内健司', '高身長の濱家隆一', '旧称"鎌鼬"']},
      {a: 'ひらいけん', h: ['ソロ歌手', '身長183cm', 'サザンオールスターズの大ファン', 'ドラマ"仁"の主題歌', 'あいみょんとコラボ', '"POP STAR"', '"瞳をとじて"']},
    ]);

function removeHidden() {//隠し要素を出現させる
  GAME.classList.remove("hidden");
}

function btnOff(){//ボタン無効
  btn.disabled = "true";
  btn.classList.add('btnOff');
  btn.classList.remove('btnOn');
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}


function setQuestion() {
  ANSWER.textContent = "_".repeat(quizSet[questionCount].a.length);
}





BTN.addEventListener('click', () => {
  btnOff();
  if(questionCount===0){
    BTN.textContent = "次の問題へ";
    setQuestion();
    removeHidden();
  }
});
