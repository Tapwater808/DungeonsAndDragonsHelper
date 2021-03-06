const newChar = JSON.parse(window.localStorage.getItem('new-char'))

document.getElementById('submit-prof').addEventListener('click', async (event) => {
    event.preventDefault();

    const newChar = JSON.parse(window.localStorage.getItem('new-char'))
    
    newChar.acrobatics = document.getElementById('acrobatics').checked,
    newChar.animalHandling = document.getElementById('animal-handling').checked,
    newChar.arcana = document.getElementById('arcana').checked,
    newChar.athletics = document.getElementById('athletics').checked,
    newChar.deception = document.getElementById('deception').checked,
    newChar.history = document.getElementById('history').checked,
    newChar.insight = document.getElementById('insight').checked,
    newChar.intimidation = document.getElementById('intimidation').checked,
    newChar.investigation = document.getElementById('investigation').checked,
    newChar.medicine = document.getElementById('medicine').checked,
    newChar.nature = document.getElementById('nature').checked,
    newChar.perception = document.getElementById('perception').checked,
    newChar.performance = document.getElementById('performance').checked,
    newChar.persuasion = document.getElementById('persuasion').checked,
    newChar.religion = document.getElementById('religion').checked,
    newChar.sleightOfHand = document.getElementById('sleight-of-hand').checked,
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
       // window.localStorage.removeItem('new-char')
    window.location.href='/char-sheet'
})