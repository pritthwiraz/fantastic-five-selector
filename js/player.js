function playerSelection(elementId) {
    const newSelectedPlayer = document.getElementById(elementId)
    player = newSelectedPlayer.innerHTML;

    const selectedPlayers = document.getElementById('selected-players');

    const li = document.createElement('li');
    li.innerText = player;

    selectedPlayers.appendChild(li);
}
document.getElementById('player-expense-calculator').addEventListener('click', function () {
    const playerCostField = document.getElementById('player-cost-field');
    const costPerPlayer = playerCostField.value

    const playerExpenses = costPerPlayer * 5;
    console.log(playerExpenses);
})

document.getElementById('player-one').addEventListener('click', function () {
    playerSelection('player-one-name');
    const elementId = document.getElementById('player-one');
    elementId.disabled = true;
})
document.getElementById('player-two').addEventListener('click', function () {
    playerSelection('player-two-name');
    const elementId = document.getElementById('player-two');
    elementId.disabled = true;
})
document.getElementById('player-three').addEventListener('click', function () {
    playerSelection('player-three-name');
    const elementId = document.getElementById('player-three');
    elementId.disabled = true;
})
document.getElementById('player-four').addEventListener('click', function () {
    playerSelection('player-four-name');
    const elementId = document.getElementById('player-four');
    elementId.disabled = true;
})
document.getElementById('player-five').addEventListener('click', function () {
    playerSelection('player-five-name');
    const elementId = document.getElementById('player-five');
    elementId.disabled = true;
})
document.getElementById('player-six').addEventListener('click', function () {
    playerSelection('player-six-name');
    const elementId = document.getElementById('player-six');
    elementId.disabled = true;
})
document.getElementById('player-seven').addEventListener('click', function () {
    playerSelection('player-seven-name');
    const elementId = document.getElementById('player-seven');
    elementId.disabled = true;
})
document.getElementById('player-eight').addEventListener('click', function () {
    playerSelection('player-eight-name');
    const elementId = document.getElementById('player-eight');
    elementId.disabled = true;
})
document.getElementById('player-nine').addEventListener('click', function () {
    playerSelection('player-nine-name');
    const elementId = document.getElementById('player-nine');
    elementId.disabled = true;
})


