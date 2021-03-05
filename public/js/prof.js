const newChar = JSON.parse(window.localStorage.getItem('new-char'))
document.getElementsByClassName(`${newChar.class}-profs`)[0].style.display = 'block'

document.getElementById('submit-prof').addEventListener('click', async (event) => {
    event.preventDefault();

    const newChar = JSON.parse(window.localStorage.getItem('new-char'))
    
    newChar.animalHandling = document.querySelector('animal-handling').value,
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