'use strict';
const faker = require('faker');
const carts = []

for (let i = 0; i < 5; i++) {
  let cart = {
    amount:faker.random.number({min:1,max:50}),
    userId: faker.random.number({min:1,max:3}),
    productId: faker.random.number({min:1,max:34}),
    orderId:faker.random.number({min:1,max:3}),
  }
  carts.push(cart)
  
}



module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Carts', carts, {});
    
  },

  down: async (queryInterface, Sequelize) => {
     
    await queryInterface.bulkDelete('Carts', null, {});
     
  }
};
