const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Obra = sequelize.define('Obra', {
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataFim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalGasto: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');{

const Obra = sequelize.define('Obra', {
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataFim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalGasto: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

Obra.belongsTo(Cliente);

module.exports = Obra;
}
