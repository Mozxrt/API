const Material = require('../models/Material');

class MaterialService {
  static async criarMaterial(descricao) {
    try {
      return await Material.create({ descricao });
    } catch (error) {
      throw new Error('Erro ao criar material');
    }
  }
}

class MaterialService {
  static async inserirMaterial(descricao) {
    try {
      return await Material.create({ descricao });
    } catch (error) {
      throw new Error('Erro ao inserir material');
    }
  }

  static async atualizarMaterial(id, descricao) {
    try {
      const material = await Material.findByPk(id);
      if (!material) throw new Error('Material não encontrado');
      material.descricao = descricao;
      await material.save();
      return material;
    } catch (error) {
      throw new Error('Erro ao atualizar material');
    }
  }

  static async apagarMaterial(id) {
    try {
      const material = await Material.findByPk(id);
      if (!material) throw new Error('Material não encontrado');
      await material.destroy();
    } catch (error) {
      throw new Error('Erro ao apagar material');
    }
  }

  static async listarMateriais() {
    try {
      return await Material.findAll();
    } catch (error) {
      throw new Error('Erro ao listar materiais');
    }
  }
}

module.exports = MaterialService;
