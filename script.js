const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

let scores,currentScore,playing,activeplayer;

const init=function () {
    scores=[0,0];
    currentScore=0;
    playing=true;
    activeplayer=0;

    score0El.textContent=0;
    score1El.textContent=0;
    document.getElementById('current--0').textContent=0;
    document.getElementById('current--1').textContent=0;

    diceEl.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

const switchPlayer=function () {
    document.getElementById(`current--${activeplayer}`).textContent=0;
    currentScore=0;
   activeplayer=activeplayer===0 ? 1 : 0;

   player0El.classList.toggle('player--active');
   player1El.classList.toggle('player--active');
}

init();

btnRoll.addEventListener('click', function() {
    if(playing) {
    const dice=Math.trunc(Math.random() * 6)+1;

    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if(dice!=1)
    {
        currentScore+=dice;
        document.getElementById(`current--${activeplayer}`).textContent=currentScore;

    }
    else{
       switchPlayer();
    }
}
});

btnHold.addEventListener('click' , function () {
    if(playing) {
    scores[activeplayer]+=currentScore;
    document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];

    if(scores[activeplayer]>=100)
    {
        diceEl.classList.add('hidden');
        playing=false;
        document.getElementById(`current--${activeplayer}`).textContent=0;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');

    }
    else{
        switchPlayer();
    }
}
  
});
 btnNew.addEventListener('click', init);