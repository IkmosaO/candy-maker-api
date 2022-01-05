const manufacturersModel = require('./manufacturers')
const productsModel = require('./products')
const Sequelize = require('sequelize')
const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const Manufacturers = manufacturersModel(connection, Sequelize)
const Products = productsModel(connection, Sequelize, Manufacturers)

Products.belongsTo(Manufacturers)
Manufacturers.hasMany(Products)

module.exports = {
  Manufacturers,
  Products
}
