const db = require('../models');

// Routes

module.exports = (app) => {

  app.get('/api/char-sheet/:id', (req, res) => {
    if (req.params.id) {
      db.Character_id.findOne({
        where: {
          id: req.params.id,
          include: [
            {model:db.Character_base_info, attributes:['char_id']},
            {model:db.Character_sub_info, attributes:['char_id_sub']},
            {model:db.Character_skills, attributes:['char_id_skills']}
          ]
        },
      }).then((result) => res.json(result))
    }
  })
  
  app.delete('/api/posts/:id', (req, res) => {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });
}