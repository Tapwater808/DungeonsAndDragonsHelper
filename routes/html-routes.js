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
    app.get('/prof', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/html/proficiencies.html'))
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