const newChar = JSON.parse(window.localStorage.getItem('new-char'))

document.getElementById('submit-prof').addEventListener('click', async (event) => {
    event.preventDefault();

    const newChar = JSON.parse(window.localStorage.getItem('new-char'))
    
    newChar.acrobatics = document.getElementById('acrobatics').checked,
    newChar.animalHandling = document.getElementById('animal-handling').checked,
    newChar.athletics = document.getElementById('athletics').checked,
    newChar.history = document.getElementById('history').checked,
    newChar.insight = document.getElementById('insight').checked,
    newChar.intimidation = document.getElementById('intimidation').checked,
    newChar.perception = document.getElementById('perception').checked,
    newChar.survival = document.getElementById('survival').checked,

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