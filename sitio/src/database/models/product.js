'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId"
      });
      Product.hasMany(models.Cart, {
        as: "cart"
       
      });
    }
  };
  Product.init({
    title: DataTypes.STRING(100),
    description: DataTypes.STRING(250),
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};