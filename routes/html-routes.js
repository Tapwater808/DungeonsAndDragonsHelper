const path = require('path');

module.exports = (app) => {

    // Home Page
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/html/homepage.html'))
    );

    // Char Creation
    app.get('/creation', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/html/character-creation.html'))
    );

    // Stats Page
    app.get('/stats', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/html/stats.html'))
    );

    // Proficiencies page
    app.get('/prof/barbarian', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/barbarian.html'))
    );

    app.get('/prof/bard', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/bard.html'))
    );

    app.get('/prof/cleric', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/cleric.html'))
    );

    app.get('/prof/druid', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/druid.html'))
    );

    app.get('/prof/fighter', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/fighter.html'))
    );

    app.get('/prof/monk', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/monk.html'))
    );

    app.get('/prof/paladin', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/paladin.html'))
    );

    app.get('/prof/ranger', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/ranger.html'))
    );

    app.get('/prof/rogue', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/rogue.html'))
    );

    app.get('/prof/sorcerer', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/sorcerer.html'))
    );

    app.get('/prof/warlock', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/warlock.html'))
    );

    app.get('/prof/wizard', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/classes-html/wizard.html'))
    );

    // Char Sheet page
    app.get('/char-sheet', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/html/char-sheet.html'))
    );

    // Spell Selection
    app.get('/spells', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/html/spells.html'))
    );

    // Spell List/Description
    app.get('/spells-list', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/html/spells-list.html'))
    );

};