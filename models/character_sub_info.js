module.exports = (sequelize, DataTypes) => {
    const Character_sub_info = sequelize.define('Author', {
        char_id_sub: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        char_speed: DataTypes.INTEGER,
        char_initiative: DataTypes.STRING,
        char_hp: DataTypes.INTEGER,
        char_hit_dice: DataTypes.INTEGER,
        char_features_traits: DataTypes.STRING
    });
  
    Character_sub_info.associate = (models) => {
        Character_sub_info.belongsTo(models.Character_id, {
            foreignKey: 'id' 
        });
    };
  
    return Character_id;
};