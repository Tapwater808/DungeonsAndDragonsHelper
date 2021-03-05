document.getElementById('submit-stats').addEventListener('click', (event) => {
    event.preventDefault();

    const newChar = JSON.parse(window.localStorage.getItem('new-char'))
    
    newChar.strength = document.getElementById('strength').value,
    newChar.dexterity = document.getElementById('dexterity').value,

    window.localStorage.setItem('new-char', JSON.stringify(newChar))
    window.location.href='/prof'
});