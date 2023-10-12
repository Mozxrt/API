
const express = require('express');
const clienteService = require('../services/clienteService');
const ClienteDTO = require('../dtos/clienteDTO'); 

const router = express.Router();

router.post('/criar', async (req, res) => {
  const { descricao } = req.body;

  try {
    const clienteDTO = new ClienteDTO(descricao); 
    const cliente = await clienteService.criarCliente(clienteDTO);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/inserir', async (req, res) => {
  const { descricao } = req.body;

  try {
    const cliente = await ClienteService.inserirCliente(descricao);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/atualizar/:id', async (req, res) => {
  const { descricao } = req.body;
  const id = req.params.id;

  try {
    const cliente = await ClienteService.atualizarCliente(id, descricao);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/apagar/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await ClienteService.apagarCliente(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/listar', async (req, res) => {
  try {
    const cliente = await ClienteService.listarCliente();
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

