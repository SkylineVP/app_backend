'use strict';
const bcrypt=require('bcrypt');
const { NAME_PATTERN, SALT_ROUND } = require( '../constants' );
const nameAttribute = {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        is: NAME_PATTERN,
    }
};
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: nameAttribute,
        lastName: nameAttribute,
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        login: {
            type: Sequelize.STRING( 16 ),
            allowNull: false,
            unique: true,
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false,
            field: 'passwordHash',
            set (value) {
                this.setDataValue( "password", bcrypt.hashSync( value, SALT_ROUND ) );
            },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        }

        },

    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};