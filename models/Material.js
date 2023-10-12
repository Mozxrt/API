const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Material = sequelize.define('Material', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Material;