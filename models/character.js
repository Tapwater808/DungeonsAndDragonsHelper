module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('Character', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
//baseinfo
        player_name: DataTypes.STRING,
        name: DataTypes.STRING,
        strength: DataTypes.INTEGER,
        dexterity: DataTypes.INTEGER,
        constitution: DataTypes.INTEGER,
        intelligence: DataTypes.INTEGER,
        wisdom: DataTypes.INTEGER,
        charisma: DataTypes.INTEGER,
        class: DataTypes.STRING,
        level: DataTypes.INTEGER,
        background: DataTypes.STRING,
        race: DataTypes.STRING,
//skills
        acrobatics: DataTypes.INTEGER,
        animal_handling: DataTypes.INTEGER,
        arcana: DataTypes.INTEGER,
        athletics: DataTypes.INTEGER,
        deception: DataTypes.INTEGER,
        history: DataTypes.INTEGER,
        insight: DataTypes.INTEGER,
        intimidation: DataTypes.INTEGER,
        investigation: DataTypes.INTEGER,
        medicine: DataTypes.INTEGER,
        nature: DataTypes.INTEGER,
        perception: DataTypes.INTEGER,
        passive_wisdom: DataTypes.INTEGER,
        performance: DataTypes.INTEGER,
        persuasion: DataTypes.INTEGER,
        religion: DataTypes.INTEGER,
        sleight_of_hand: DataTypes.INTEGER,
        stealth: DataTypes.INTEGER,
        survival: DataTypes.INTEGER,
//subinfo
        speed: DataTypes.INTEGER,
        initiative: DataTypes.STRING,
        hp: DataTypes.INTEGER,
        hit_dice: DataTypes.INTEGER,
        features_traits: DataTypes.STRING,
    });
  
    return Character;
};