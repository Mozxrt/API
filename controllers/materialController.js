
const express = require('express');
const MaterialService = require('../services/materialService');
const MaterialDTO = require('../dtos/materialDTO');

const router = express.Router();

router.post('/criar', async (req, res) => {
  const { descricao } = req.body;

  try {
    const materialDTO = new MaterialDTO(descricao);
    const material = await MaterialService.criarMaterial(materialDTO);
    res.status(201).json(material);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/atualizar/:id', async (req, res) => {
  const { descricao } = req.body;
  const id = req.params.id;

  try {
    const material = await MaterialService.atualizarMaterial(id, descricao);
    res.status(200).json(material);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/apagar/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await MaterialService.apagarMaterial(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/listar', async (req, res) => {
  try {
    const materiais = await MaterialService.listarMateriais();
    res.status(200).json(materiais);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;



module.exports = router;
