const newChar = JSON.parse(window.localStorage.getItem('new-char'))

document.getElementById('submit-prof').addEventListener('click', async (event) => {
    event.preventDefault();

    const newChar = JSON.parse(window.localStorage.getItem('new-char'))

    newChar.animalHandling = document.getElementById('animal-handling').checked,
    newChar.arcana = document.getElementById('arcana').checked,
    newChar.insight = document.getElementById('insight').checked,
    newChar.medicine = document.getElementById('medicine').checked,
    newChar.nature = document.getElementById('nature').checked,
    newChar.perception = document.getElementById('perception').checked,
    newChar.religion = document.getElementById('religion').checked,
    newChar.survival = document.getElementById('survival').checked,

    window.localStorage.setItem('new-char', JSON.stringify(newChar))
    
    await fetch("/api/character", {
        method: "POST",
        headers: {
            "Content-Type": "Application/Json"
        },
        body: JSON.stringify(newChar)
    })
<<<<<<< HEAD:public/js/classes-js/druid.js
    // window.localStorage.removeItem('new-char')
=======
>>>>>>> 42d931baea846a2c1817211b66dec9d0132b6fc4:public/classes-js/druid.js
    window.location.href='/char-sheet'
})