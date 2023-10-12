
const Obra = require('../models/Obra');
const Material = require('../models/Material');
const Cliente = require('../models/Cliente');

class obraService {
  static async criarObra(descricao) {
    try {
      return await Obra.create({ descricao });
    } catch (error) {
      throw new Error('Erro ao criar obra');
    }
  }

  static async inserirObra(dataInicio, dataFim, clienteId, materiais) {
    try {
      const cliente = await Cliente.findByPk(clienteId);
      if (!cliente) throw new Error('Cliente não encontrado');

      const materiaisEncontrados = await Material.findAll({ where: { id: materiais } });
      if (materiais.length !== materiaisEncontrados.length) {
        throw new Error('Alguns materiais não foram encontrados');
      }

      const obra = await Obra.create({ dataInicio, dataFim });
      obra.setCliente(cliente);
      obra.setMateriais(materiaisEncontrados);

      return obra;
    } catch (error) {
      throw new Error('Erro ao inserir obra');
    }
  }


static async listarObraComGastos(id) {
    try {
      const obra = await Obra.findByPk(id, {
        include: [{ model: Material }],
      });
  
      if (!obra) throw new Error('Obra não encontrada');
  
      const gastos = obra.Materiais.reduce((total, material) => {
        return total + material.preco;
      }, 0);
  
      return { ...obra.toJSON(), gastos };
    } catch (error) {
      throw new Error('Erro ao listar obra com gastos');
    }
  }
}

module.exports = obraService;

