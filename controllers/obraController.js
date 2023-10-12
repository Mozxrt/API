
const express = require('express');
const obraService = require('../services/obraService');
const ObraDTO = require('../dtos/obraDTO'); 

const router = express.Router();

router.post('/criar', async (req, res) => {
  const { descricao } = req.body;

  try {
    const obraDTO = new ObraDTO(descricao); 
    const obra = await obraService.criarObra(obraDTO);
    res.status(201).json(obra);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get('/listar/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const obra = await obraService.listarObraComGastos(id);
      res.status(200).json(obra);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  


module.exports = router;
