
const Cliente = require('../models/Material');

class clienteService {
  static async criarCliente(descricao) {
    try {
      return await Cliente.create({ descricao });
    } catch (error) {
      throw new Error('Erro ao criar cliente');
    }
  }


}

const Cliente = require('../models/Cliente');

class clienteService {
  static async inserirCliente(descricao) {
    try {
      return await Cliente.create({ descricao });
    } catch (error) {
      throw new Error('Erro ao inserir cliente');
    }
  }

  static async atualizarCliente(id, descricao) {
    try {
      const cliente = await Cliente.findByPk(id);
      if (!cliente) throw new Error('Cliente não encontrado');
      cliente.descricao = descricao;
      await cliente.save();
      return cliente;
    } catch (error) {
      throw new Error('Erro ao atualizar cliente');
    }
  }

  static async apagarCliente(id) {
    try {
      const cliente = await Cliente.findByPk(id);
      if (!cliente) throw new Error('Cliente não encontrado');
      await cliente.destroy();
    } catch (error) {
      throw new Error('Erro ao apagar cliente');
    }
  }

  static async listarCliente() {
    try {
      return await Cliente.findAll();
    } catch (error) {
      throw new Error('Erro ao listar cliente');
    }
  }
};

module.exports = clienteService;
