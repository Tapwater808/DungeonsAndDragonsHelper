document.getElementById('submit-stats').addEventListener('click', (event) => {
    event.preventDefault();

    const newChar = JSON.parse(window.localStorage.getItem('new-char'))
    
    newChar.strength = document.getElementById('strength').value,
    newChar.dexterity = document.getElementById('dexterity').value,
    newChar.constitution = document.getElementById('constitution').value,
    newChar.intelligence = document.getElementById('intelligence').value,
    newChar.wisdom = document.getElementById('wisdom').value,
    newChar.charisma = document.getElementById('charisma').value,

    window.localStorage.setItem('new-char', JSON.stringify(newChar))
    window.location.href='/prof'
});