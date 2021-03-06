const newChar = JSON.parse(window.localStorage.getItem('new-char'))

document.getElementById('submit-prof').addEventListener('click', async (event) => {
    event.preventDefault();

    const newChar = JSON.parse(window.localStorage.getItem('new-char'))
    
    newChar.animalHandling = document.getElementById('animal-handling').checked,
    newChar.athletics = document.getElementById('athletics').checked,
    newChar.insight = document.getElementById('insight').checked,
    newChar.investigation = document.getElementById('investigation').checked,
    newChar.nature = document.getElementById('nature').checked,
    newChar.perception = document.getElementById('perception').checked,
    newChar.stealth = document.getElementById('stealth').checked,
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