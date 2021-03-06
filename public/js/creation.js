document.getElementById('submit-creation').addEventListener('click', (event) => {
    event.preventDefault();
    const newChar = {
        char_name: document.getElementById('characterName').value,
        player_name: document.getElementById('playerName').value,
        class: document.getElementById('classMenu').value,
        level: document.getElementById('levelSelect').value,
        race: document.getElementById('raceSelect').value,
        background: document.getElementById('backgroundSelect').value,
        strength: document.getElementById('strength').value,
        dexterity: document.getElementById('dexterity').value,
        constitution: document.getElementById('constitution').value,
        intelligence: document.getElementById('intelligence').value,
        wisdom: document.getElementById('wisdom').value,
        charisma: document.getElementById('charisma').value,
    }

    window.localStorage.setItem('new-char', JSON.stringify(newChar)),
    window.location.href=`/prof/${newChar.class}`
})