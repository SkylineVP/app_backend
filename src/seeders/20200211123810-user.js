'use strict';
const bcrypt=require('bcrypt');
const { SALT_ROUND } = require( '../constants' );

function generateUsers () {
  const users = [];
  for (let i = 0; i < 60;) {
    users.push( new Object( {
      firstName: `User${++i}`,
      lastName: `Userovich${i}`,
      email: `test${i}@gmail.com`,
      login:`LoginUser${i}`,
      passwordHash:bcrypt.hashSync( `password${i}`, SALT_ROUND ),
      profilePicture:`picture${i}`,
      createdAt: new Date(),
      updatedAt: new Date()
    } ) )
    ;
  }
  return users;
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users',generateUsers(), {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
