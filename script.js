'use strict';
alert(
  'Luật chơi như sau: \n Mỗi người chơi có quyền Roll hoặc Hold. Nếu ai Roll trúng số 1 thì sẽ điểm sẽ về 0. Ai chạm mốc 100 điểm trước thì sẽ thắng. \n Chúc bạn may mắn.'
);
const resetBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const score1 = document.querySelector('#score--0');
const curScore1 = document.querySelector('#current--0');
const curScore2 = document.querySelector('#current--1');
const score2 = document.querySelector('#score--1');
const random = () => Math.floor(Math.random() * 6) + 1;
const changePlayer = condition => {
  const player1 = document.querySelector('.player--0');
  const player2 = document.querySelector('.player--1');

  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    player = 2;
    curPlayer1Sum = 0;
    curScore1.textContent = 0;
  } else {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    player = 1;
    curPlayer2Sum = 0;
    curScore2.textContent = 0;
  }
};
const check = point => {
  return point >= 100 ? true : false;
};
let player1Sum = 0;
let curPlayer1Sum = 0;
let player2Sum = 0;
let curPlayer2Sum = 0;
let player = 1;
rollDiceBtn.addEventListener('click', () => {
  let randNum = random();
  diceImg.src = `dice-${randNum}.png`;
  if (player === 1) {
    if (randNum === 1) {
      player1Sum = 0;
      curScore1.textContent = 0;
      score1.textContent = player1Sum;
      changePlayer();
      return;
    }
    curPlayer1Sum += randNum;
    curScore1.textContent = curPlayer1Sum;
    if (check(player1Sum)) {
      alert('Player 1 Win!!!');
      reset();
    }
  } else {
    if (randNum === 1) {
      player2Sum = 0;
      curScore2.textContent = 0;
      score2.textContent = player2Sum;
      changePlayer();
      return;
    }
    curPlayer2Sum += randNum;
    curScore2.textContent = curPlayer2Sum;
    if (check(player2Sum)) {
      alert('Player 2 Win!!!');
      reset();
    }
  }
});
holdBtn.addEventListener('click', () => {
  if (player === 1) {
    player1Sum += curPlayer1Sum;
    score1.textContent = player1Sum;
  } else {
    player2Sum += curPlayer2Sum;
    score2.textContent = player2Sum;
  }
  changePlayer();
});
const reset = () => {
  if (player == 2) changePlayer();
  player1Sum = 0;
  curPlayer1Sum = 0;
  player2Sum = 0;
  curPlayer2Sum = 0;
  if (player == 2) changePlayer();
  score1.textContent = 0;
  score2.textContent = 0;
  curScore1.textContent = 0;
  curScore2.textContent = 0;
};
resetBtn.addEventListener('click'.reset);
