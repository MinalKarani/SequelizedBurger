module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name:
    {
      type: DataTypes.STRING,
      allowNull: false,
    
      // len is a validation that checks that our Burger is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    devoured: 
    {
      type:DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new Burger complete value to false if
      // it isn't supplied one
      defaultValue: false
    },
    createdAt:
    {
      type:DataTypes.DATE(),

    },
    updatedAt:
    {
      type:DataTypes.DATE(),

    }
  });

  Burger.associate = function(models) {
    // We're saying that a Burger should belong to an Author
    // A Burger can't be created without an Customer due to the foreign key constraint
    Burger.belongsTo(models.Customer, {
      foreignKey: {
      }
    });
  };

  return Burger;
};
