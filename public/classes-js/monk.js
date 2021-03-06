const newChar = JSON.parse(window.localStorage.getItem('new-char'))

document.getElementById('submit-prof').addEventListener('click', async (event) => {
    event.preventDefault();

    const newChar = JSON.parse(window.localStorage.getItem('new-char'))
    
    newChar.acrobatics = document.getElementById('acrobatics').checked,
    newChar.athletics = document.getElementById('athletics').checked,
    newChar.history = document.getElementById('history').checked,
    newChar.insight = document.getElementById('insight').checked,
    newChar.religion = document.getElementById('religion').checked,
    newChar.stealth = document.getElementById('stealth').checked,
    
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