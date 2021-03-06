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

    window.localStorage.setItem('new-char', JSON.stringify(newChar))

    if (newChar.class = 'bard') {
        window.location.href='../classes-html/bard.html'
    } else if (newChar.class = 'barbarian') {
        window.location.href='../classes-html/barbarian.html'
    } else if (newChar.class = 'cleric') {
        window.location.href='../classes-html/cleric.html'
    } else if (newChar.class = 'druid') {
        window.location.href='../classes-html/druid.html'
    } else if (newChar.class = 'fighter') {
        window.location.href='../classes-html/fighter.html'
    } else if (newChar.class = 'monk') {
        window.location.href='../classes-html/monk.html'
    } else if (newChar.class = 'paladin') {
        window.location.href='../classes-html/paladin.html'
    } else if (newChar.class = 'ranger') {
        window.location.href='../classes-html/ranger.html'
    } else if (newChar.class = 'rogue') {
        window.location.href='../classes-html/rogue.html'
    } else if (newChar.class = 'sorcerer') {
        window.location.href='../classes-html/sorcerer.html'
    } else if (newChar.class = 'warlock') {
        window.location.href='../classes-html/warlock.html'
    } else if (newChar.class = 'wizard') {
        window.location.href='../classes-html/wizard.html'
    }
})