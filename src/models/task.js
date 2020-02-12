'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    values: {
      type:DataTypes.STRING,
      validate:{
        isNull:false,
        notEmpty:true,
        is:/^[^ ]*$/,
      }
    },
    deadline: {
      type:DataTypes.DATE
    },
    userId: {
      type:DataTypes.INTEGER
    },
    files: {
      type:DataTypes.ARRAY
    }
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};