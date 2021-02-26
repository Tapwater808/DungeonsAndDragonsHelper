module.exports = (sequelize, DataTypes) => {
    const Character_base_info = sequelize.define('Character_base_info', {
        char_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        player_name: DataTypes.STRING,
        char_name: DataTypes.STRING,
        char_strength: DataTypes.INTEGER,
        char_dexterity: DataTypes.INTEGER,
        char_constitution: DataTypes.INTEGER,
        char_intelligence: DataTypes.INTEGER,
        char_wisdom: DataTypes.INTEGER,
        char_charisma: DataTypes.INTEGER,
        char_class: DataTypes.STRING,
        char_level: DataTypes.INTEGER,
        char_background: DataTypes.INTEGER,
        char_race: DataTypes.INTEGER
    });
  
    Character_base_info.associate = (models) => {
        Character_base_info.belongsTo(models.Character_id, {
            foreignKey: 'id',
        });
    };
  
    return Character_base_info;
};