const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Obra = require('./Obra');

const Cliente = sequelize.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
    validate: {
      notNull: {
        msg: 'O nome do cliente é obrigatório',
  },
  isUnique: async function (value) {
    const existingCliente = await Cliente.findOne({ where: { nome: value } });
    if (existingCliente) {
      throw new Error('Já existe um cliente com esse nome');
    }
  },
},
  },
    });

Cliente.hasMany(Obra);
Obra.belongsTo(Cliente);
module.exports = Cliente;
