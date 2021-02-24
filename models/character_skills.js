module.exports = (sequelize, DataTypes) => {
    const Character_skills = sequelize.define('Author', {
        char_id_skills: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        char_acrobatics: DataTypes.INTEGER,
        char_animal_handling: DataTypes.INTEGER,
        char_arcana: DataTypes.INTEGER,
        char_athletics: DataTypes.INTEGER,
        char_deception: DataTypes.INTEGER,
        char_history: DataTypes.INTEGER,
        char_insight: DataTypes.INTEGER,
        char_intimidation: DataTypes.INTEGER,
        char_investigation: DataTypes.INTEGER,
        char_medicine: DataTypes.INTEGER,
        char_nature: DataTypes.INTEGER,
        char_perception: DataTypes.INTEGER,
        char_passive_wisdom: DataTypes.INTEGER,
        char_performance: DataTypes.INTEGER,
        char_persuasion: DataTypes.INTEGER,
        char_religion: DataTypes.INTEGER,
        char_sleight_of_hand: DataTypes.INTEGER,
        char_stealth: DataTypes.INTEGER,
        char_survival: DataTypes.INTEGER
    });
  
    Character_skills.associate = (models) => {
        Character_skills.belongsTo(models.Character_id, {
            foreignKey: 'id' 
        });
    };
  
    return Character_id;
};