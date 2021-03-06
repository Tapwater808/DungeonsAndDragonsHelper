const newChar = JSON.parse(window.localStorage.getItem('new-char'))

document.getElementById('submit-prof').addEventListener('click', async (event) => {
    event.preventDefault();

    const newChar = JSON.parse(window.localStorage.getItem('new-char'))
    
    newChar.arcana = document.getElementById('arcana').checked,
    newChar.deception = document.getElementById('deception').checked,
    newChar.history = document.getElementById('history').checked,
    newChar.intimidation = document.getElementById('intimidation').checked,
    newChar.investigation = document.getElementById('investigation').checked,
    newChar.nature = document.getElementById('nature').checked,
    newChar.religion = document.getElementById('religion').checked,

    window.localStorage.setItem('new-char', JSON.stringify(newChar))
    
    await fetch("/api/character", {
        method: "POST",
        headers: {
            "Content-Type": "Application/Json"
        },
        body: JSON.stringify(newChar)
    })
    window.location.href='/char-sheet'
})