'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users","emmail");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Users",
      "emmail",
      {
        type: Sequelize.DataTypes.STRING
      }
    );
  }
};
