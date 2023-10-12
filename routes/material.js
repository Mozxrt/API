
const express = require('express');
const MaterialService = require('../services/materialService');

const router = express.Router();

router.post('/criar', async (req, res) => {
  const { descricao } = req.body;
  try {
    const material = await MaterialService.criarMaterial(descricao);
    res.status(201).json(material);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/material/inserir', (req, res) => {
});


module.exports = router;
