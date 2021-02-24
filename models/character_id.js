module.exports = (sequelize, DataTypes) => {
    const Character_id = sequelize.define('Author', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });
  
    Character_id.associate = (models) => {
        Character_id.hasMany(models.Character_base_info, {
        onDelete: 'cascade',
      });
    };
  
    return Character_id;
};