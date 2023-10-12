
const express = require('express');
const router = express.Router();
const GastoMaterialObra = require('../models/GastoMaterialObra');

router.post('/', async (req, res) => {
  try {
    const { quantidade, preco, MaterialId, ObraId } = req.body;
    const gastoMaterialObra = await GastoMaterialObra.create({
      quantidade,
      preco,
      MaterialId,
      ObraId,
    });
    res.status(201).json(gastoMaterialObra);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar o registro de gasto de material em uma obra' });
  }
});

module.exports = router;
