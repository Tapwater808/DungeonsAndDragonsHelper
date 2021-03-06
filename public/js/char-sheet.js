const newChar = JSON.parse(window.localStorage.getItem('new-char'))
    
document.getElementById("char-name").innerHTML += newChar.char_name;
document.getElementById("player-name").innerHTML += newChar.player_name;
document.getElementById("char-class").innerHTML += newChar.class;
document.getElementById("char-level").innerHTML += newChar.level;
document.getElementById("char-race").innerHTML += newChar.race;
document.getElementById("char-background").innerHTML += newChar.background;
document.getElementById("char-strength").innerHTML += newChar.strength;
document.getElementById("char-athletics").innerHTML += newChar.athletics;
document.getElementById("char-dexterity").innerHTML += newChar.dexterity;
document.getElementById("char-acrobatics").innerHTML += newChar.acrobatics;
document.getElementById("char-slight-of-hand").innerHTML += newChar.sleightOfHand;
document.getElementById("char-stealth").innerHTML += newChar.stealth;
document.getElementById("char-constitution").innerHTML += newChar.constitution;
document.getElementById("char-intelligence").innerHTML += newChar.intelligence;
document.getElementById("char-arcana").innerHTML += newChar.arcana;
document.getElementById("char-history").innerHTML += newChar.history;
document.getElementById("char-investigation").innerHTML += newChar.investigation;
document.getElementById("char-nature").innerHTML += newChar.nature;
document.getElementById("char-religion").innerHTML += newChar.religion;
document.getElementById("char-wisdom").innerHTML += newChar.wisdom;
document.getElementById("char-animal-handling").innerHTML += newChar.animalHandling;
document.getElementById("char-insight").innerHTML += newChar.insight;
document.getElementById("char-medicine").innerHTML += newChar.medicine;
document.getElementById("char-perception").innerHTML += newChar.perception;
document.getElementById("char-survival").innerHTML += newChar.survival;
document.getElementById("char-charisma").innerHTML += newChar.charisma;
document.getElementById("char-deception").innerHTML += newChar.deception;
document.getElementById("char-intimidation").innerHTML += newChar.intimidation;
document.getElementById("char-performance").innerHTML += newChar.performance;
document.getElementById("char-persuasion").innerHTML += newChar.persuasion;

window.localStorage.removeItem('new-char')