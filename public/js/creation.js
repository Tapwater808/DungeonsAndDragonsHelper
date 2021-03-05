document.getElementById('submit-creation').addEventListener('click', (event) => {
    event.preventDefault();
    const newChar = {
        char_name: document.getElementById('characterName').value,
        player_name: document.getElementById('playerName').value,
        class: document.getElementById('classMenu').value,
    }
    window.localStorage.setItem('new-char', JSON.stringify(newChar))
    window.location.href='/stats'
})