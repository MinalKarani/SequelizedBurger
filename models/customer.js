module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      // Giving the Author model a name of type STRING
      name:
      {
      type:DataTypes.STRING,
      allowNull: false
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
  
    Customer.associate = function(models) {
      // Associating Customer with Burger
      // When an Customer is deleted, also delete any associated Burger
      Customer.hasMany(models.Burger, {
        onDelete: "cascade"
      });
    };
  
    return Customer;
  };
  