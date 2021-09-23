'use strict';
const faker = require('faker');
const orders = []
const estatus = ["completado","pendiente","rechazado"]

for (let i = 0; i < 3; i++) {
  let order = {
    status: estatus[i] ,
    userId: i+1,
    createdAt: new Date,
    updatedAt: new Date,
  }
  orders.push(order)
  
}



module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Orders', orders, {});
    
  },

  down: async (queryInterface, Sequelize) => {
     
    await queryInterface.bulkDelete('Orders', null, {});
     
  }
};
