document.addEventListener("DOMContentLoaded", function() {
  const choices = document.querySelectorAll('.choice');
  const scoreDisplay = document.getElementById('score');
  const resultText = document.getElementById('result-text');
  let score = localStorage.getItem('score') || 0;

  scoreDisplay.textContent = score;

  choices.forEach(choice => {
    choice.addEventListener('click', playRound);
  });

  function playRound(event) {
    const playerChoice = event.target.dataset.choice;
    const computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    const result = getResult(playerChoice, computerChoice);

    if (result === 'win') {
      score++;
      localStorage.setItem('score', score);
      scoreDisplay.textContent = score;
    }

    resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You ${result}!`;
  }

  function getResult(player, computer) {
    if (player === computer) {
      return 'draw';
    }

    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      return 'win';
    }

    return 'lose';
  }
});
