let scores, currentPlayerStatus, totalScore;


// set current scores to zero (0)
let setCurrentScore = () => {
  document.querySelector('#current-0').innerHTML = '0';
  document.querySelector('#current-1').innerHTML = '0';
}

// set saved score to zeor 
let setSavedScore = () => {
  document.querySelector('.player-saved-score-0').innerHTML = '0';
  document.querySelector('.player-saved-score-1').innerHTML = '0';
}

// set display ppt of dice on getting zero or its loading page 
let setDiceDisplay = () => {
  document.querySelector('.dice-holder').style.display = 'none'
}

// ============= set current player  ==========
let setNextPlayer = () => {
  currentPlayerStatus === 0 ? currentPlayerStatus = 1 : currentPlayerStatus = 0
  totalScore = 0;
  setCurrentScore()
  document.querySelector('.panel-0').classList.toggle('active')
  document.querySelector('.panel-1').classList.toggle('active')
  setDiceDisplay()
}

// ==========on load of this page ===========
let init = () => {
  scores = [0,0];
  currentPlayerStatus = 0;
  totalScore = 0;
  // activePlaying = true
  setDiceDisplay()
  setCurrentScore()
  setSavedScore()
}
init()

//========= when player rolls a dice ============
document.querySelector('.btn-roll').addEventListener('click', ()=>{
  if (activeplaying) {
    const dice = Math.floor((Math.random() * 6) + 1);
    document.querySelector('.dice-holder').style.display = 'block'
    document.querySelector('.dice').src = `assets/imgs/dice-${dice}.png`;

    if (dice > 1) {
      totalScore += dice
      document.querySelector(`#current-${currentPlayerStatus}`).innerHTML = totalScore;
    } else {
      // next player turn 
      setNextPlayer()
    }
  }
})


// ========= when a player hold on a dice =========
document.querySelector('.btn-hold').addEventListener('click', () => {
  if (activePlaying) {
    scores[currentPlayerStatus] += totalScore
  document.querySelector(`.player-saved-score-${currentPlayerStatus}`).innerHTML = scores[currentPlayerStatus];
  document.querySelector(`.player-saved-score-${currentPlayerStatus}`).innerHTML = scores[currentPlayerStatus];
  if (scores[currentPlayerStatus] >= 20) {
    document.querySelector(`.player-name-${currentPlayerStatus}`).textContent = 'Winner!!! :)' 
    document.querySelector(`.panel-${currentPlayerStatus}`).style.color = '#EB4D4D' 
    activePlaying = false
    // document.querySelector(`.player-name-${currentPlayerStatus}::after`).style.content = 'none' 
    setDiceDisplay()    
  }else {
     setNextPlayer()
   }
  }
})

// ======= when a player start the game afresh =======
document.querySelector('.btn-new').addEventListener('click',init)

