const db = require('../models');

// Routes

module.exports = (app) => {
  //route for getting character sheet
  app.get('/api/character/:id', (req, res) => {
    if (req.params.id) {
      db.Character.findOne({
        where: {
          id: req.params.id,
        },
      }).then((result) => res.json(result))
    }
  })

  //GET route for character name
  app.get('/api/character/character', (req, res) => {
    if (req.params.id) {
      db.Character.findOne({
        where: {
          id: req.params.id,
        },
      }).then((result) => res.json(result))
    }
  })

  // POST route for saving a character
  app.post("/api/character", (req, res) => {
    console.log("We got: ", req.body);
    db.Character.create({

      player_name: req.body.player_name,
      char_name: req.body.char_name,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      class: req.body.class,
      level: req.body.level,
      background: req.body.background,
      race: req.body.race,
      acrobatics: req.body.acrobatics,
      animal_handling: req.body.animalHandling,
      arcana: req.body.arcana,
      athletics: req.body.athletics,
      deception: req.body.deception,
      history: req.body.history,
      insight: req.body.insight,
      intimidation: req.body.intimidation,
      investigation: req.body.investigation,
      medicine: req.body.medicine,
      nature: req.body.nature,
      perception: req.body.perception,
      performance: req.body.performance,
      persuasion: req.body.persuasion,
      religion: req.body.religion,
      sleight_of_hand: req.body.sleight_of_hand,
      stealth: req.body.stealth,
      survival: req.body.survival,      

    }).then((result) => {
      res.json(result);
    });
  });

  //Post route for updating
  app.put("/api/character/:id", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  //route for deleteing characters
  app.delete('/api/posts/:id', (req, res) => {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });
};