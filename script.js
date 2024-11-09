
const addPlayerButton = document.getElementById('add-player');
const leaderboardTableBody = document.querySelector('#leaderboard tbody');
const increaseScoreButton = document.getElementById('increase-score');
const decreaseScoreButton = document.getElementById('decrease-score');
const scoreInput = document.getElementById('score');


addPlayerButton.addEventListener('click', () => {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const country = document.getElementById('country').value;
  const score = parseInt(scoreInput.value);

  if (firstName && lastName && country && !isNaN(score)) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${country}</td>
      <td class="score-cell" contenteditable="true">${score}</td>
      <td>
        <button class="increase-btn">+5</button>
        <button class="decrease-btn">-5</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;

    leaderboardTableBody.appendChild(newRow);
    
    // Clear input fields
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('country').value = '';
    scoreInput.value = 0;
  } else {
    alert('Please fill all fields with valid data.');
  }
});


leaderboardTableBody.addEventListener('click', (event) => {
  if (event.target.classList.contains('increase-btn')) {
    const scoreCell = event.target.closest('tr').querySelector('.score-cell');
    scoreCell.textContent = parseInt(scoreCell.textContent) + 5;
  } else if (event.target.classList.contains('decrease-btn')) {
    const scoreCell = event.target.closest('tr').querySelector('.score-cell');
    scoreCell.textContent = parseInt(scoreCell.textContent) - 5;
  } else if (event.target.classList.contains('delete-btn')) {
    const row = event.target.closest('tr');
    row.remove();
  }
});


increaseScoreButton.addEventListener('click', () => {
  scoreInput.value = parseInt(scoreInput.value) + 1;
});

decreaseScoreButton.addEventListener('click', () => {
  scoreInput.value = parseInt(scoreInput.value) - 1;
});
