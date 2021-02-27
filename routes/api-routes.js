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
//GET route for player name
  app.get('/api/character/player_name', (req, res) => {
    if (req.params.id) {
      db.Character.findOne({
        where: {
          id: req.params.id,
        },
      }).then((result) => res.json(result))
    }
  })

    // POST route for saving a character
    app.post("/api/character/:id", function(req, res) {
      db.Post.create(req.body).then(function(dbPost) {
        res.json(dbPost);
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
  };
  

  //route for deleteing characters
  app.delete('/api/posts/:id', (req, res) => {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });
