document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM loaded! 🚀');

    const charName = document.getElementById('characterName');
    const playerName = document.getElementById('playerName');
    const classSelect = document.getElementById('classMenu');
    const levelSelect = document.getElementById('levelSelect');
    const raceSelect = document.getElementById('raceSelect');
    const backgroundSelect = document.getElementById('backgroundSelect');
    const acrobatics = document.getElementById('acrobatics');
    const animal_handling = document.getElementById('animal-handling');
    const arcana = document.getElementById('arcana');
    const athletics = document.getElementById('athletics');
    const deception = document.getElementById('deception');
    const history = document.getElementById('history');
    const insight = document.getElementById('insight');
    const intimidation = document.getElementById('intimidation');
    const investigation = document.getElementById('investigation');
    const medicine = document.getElementById('medicine');
    const nature = document.getElementById('nature');
    const perception = document.getElementById('perception');
    const performance = document.getElementById('performance');
    const persuasion = document.getElementById('persuasion');
    const religion = document.getElementById('religion');
    const sleight_of_hand = document.getElementById('sleight-of-hand');
    const stealth = document.getElementById('stealth');
    const survival = document.getElementById('survival');
    const strength = document.getElementById('strength');
    const dexterity = document.getElementById('dexterity');
    const constitution = document.getElementById('constitution');
    const intelligence = document.getElementById('intelligence');
    const wisdom = document.getElementById('wisdom');
    const charisma = document.getElementById('charisma');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newCharacter = {
            player_name: playerName.value.trim(),    
            char_name: charName.value.trim(),    
            strength: strength.value.trim(),    
            dexterity: dexterity.value.trim(),    
            constitution: constitution.value.trim(),    
            intelligence: intelligence.value.trim(),    
            wisdom: wisdom.value.trim(),    
            charisma: charisma.value.trim(),    
            class: classSelect.value.trim(),
            level: levelSelect.value.trim(),    
            background: backgroundSelect.value.trim(),    
            race: raceSelect.value.trim(),    
            acrobatics: acrobatics.value.trim(),    
            animal_handling: animal_handling.value.trim(),    
            arcana: arcana.value.trim(),    
            athletics: athletics.value.trim(),    
            deception: deception.value.trim(),    
            history: history.value.trim(),
            insight: insight.value.trim(),    
            intimidation: intimidation.value.trim(),    
            investigation: investigation.value.trim(),    
            medicine: medicine.value.trim(),    
            nature: nature.value.trim(),    
            perception: perception.value.trim(),    
            performance: performance.value.trim(),    
            persuasion: persuasion.value.trim(),    
            religion: religion.value.trim(),    
            sleight_of_hand: sleight_of_hand.value.trim(),    
            stealth: stealth.value.trim(),    
            survival: survival.value.trim()
          };

          console.log(newCharacter);
          submitCharacter(newCharacter);
    };

    const submitCharacter = (character) => {
        fetch('/api/character', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(character),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success in submitting:', data);
        })
          .catch((error) => {
            console.error('Error:', error);
        });
    };

    document.document.getElementById('dataForm').addEventListener('submit', handleFormSubmit);
});  