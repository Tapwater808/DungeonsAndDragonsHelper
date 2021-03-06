const newChar = JSON.parse(window.localStorage.getItem('new-char'))

document.getElementById('submit-prof').addEventListener('click', async (event) => {
    event.preventDefault();

    const newChar = JSON.parse(window.localStorage.getItem('new-char'))
    
    newChar.athletics = document.getElementById('athletics').checked,
    newChar.insight = document.getElementById('insight').checked,
    newChar.intimidation = document.getElementById('intimidation').checked,
    newChar.investigation = document.getElementById('investigation').checked,
    newChar.medicine = document.getElementById('medicine').checked,
    newChar.persuasion = document.getElementById('persuasion').checked,
    newChar.religion = document.getElementById('religion').checked,

    window.localStorage.setItem('new-char', JSON.stringify(newChar))
    
    await fetch("/api/character", {
        method: "POST",
        headers: {
            "Content-Type": "Application/Json"
        },
        body: JSON.stringify(newChar)
    })
    window.localStorage.removeItem('new-char')
    window.location.href='/char-sheet'
})