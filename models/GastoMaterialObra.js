
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Material = require('./Material');
const Obra = require('./Obra');

const GastoMaterialObra = sequelize.define('GastoMaterialObra', {
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

Material.belongsToMany(Obra, { through: GastoMaterialObra });
Obra.belongsToMany(Material, { through: GastoMaterialObra });

module.exports = GastoMaterialObra;
