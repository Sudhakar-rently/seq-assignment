'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Kyle",
          lastName: "Briyani",
          email: "kyle@briyani.com",
          createdAt:new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "shaw",
          lastName: "Diesel",
          email: "shaw@diesel.com",
          createdAt:new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Toretto",
          lastName: "Dom",
          email: "dom@toretto.com",
          createdAt:new Date(),
          updatedAt: new Date()
        }
      ]
    )
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users",null,{});
  }
};
