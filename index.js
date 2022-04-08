let userTotalScore = 0;
let compTotalScore = 0;

function userChoice(choice) {
  let userCh;
  if (choice === 'r') {
    userCh = 'rock'
  } else if (choice === 'p') {
    userCh = 'paper'
  } else if (choice === 's') {
    userCh = 'scissors'
  }

  let computerNum = Math.floor(Math.random() * 3);
  // 0 = rock, 1 = paper, 2 = scissors

  if (computerNum === 0) {
    if (choice === 'r') {
      window.alert(`computer choice = rock\nyour choice = ${userCh}\ntie`);
    } else if (choice === 'p') {
      window.alert(`computer choice = rock\nyour choice = ${userCh}\nyou win`)
      userTotalScore++;
    } else {
      window.alert(`computer choice = rock\nyour choice = ${userCh}\ncomputer wins`)
      compTotalScore++;
    }
  } else if (computerNum === 1) {
    if (choice === 'r') {
      window.alert(`computer choice = paper\nyour choice = ${userCh}\ncomputer wins`)
      compTotalScore++;
    } else if (choice === 'p') {
      window.alert(`computer choice = paper\nyour choice = ${userCh}\ntie`)
    } else {
      window.alert(`computer choice = paper\nyour choice = ${userCh}\nyou win`)
      userTotalScore++;
    }
  } else if (computerNum === 2) {
    if (choice === 'r') {
      window.alert(`computer choice = scissors\nyour choice = ${userCh}\nyou win`)
      userTotalScore++;
    } else if (choice === 'p') {
      window.alert(`computer choice = scissors\nyour choice = ${userCh}\ncomputer wins`)
      compTotalScore++;
    } else {
      window.alert(`computer choice = scissors\nyour choice = ${userCh}\ntie`)
    }
  }
  let userScore = document.getElementsByClassName('userNumScore')[0];
  let compScore = document.getElementsByClassName('compNumScore')[0];
  userScore.innerHTML = userTotalScore;
  compScore.innerHTML = compTotalScore;
};
