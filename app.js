const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./database'); // Importe o objeto sequelize
const materialRoutes = require('./routes/material');
const clienteRoutes = require('./routes/cliente');
const obraRoutes = require('./routes/obra');
const gastoMaterialObraRoutes = require('./routes/gastoMaterialObra');
const ErrorHandler = require('./middleware/errorHandler');
const app = express();
const PORT = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json());
app.use('/api/material', materialRoutes);
app.use('/api/cliente', clienteRoutes);
app.use('/api/obra', obraRoutes);
app.use('/api/gastoMaterialObra', gastoMaterialObraRoutes);
app.use(ErrorHandler.handleErrors);

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Conexão com o PostgreSQL estabelecida');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao PostgreSQL:', error);
  });
const pool = require('./dbConfig');

pool.query('SELECT * FROM Tables', (error, results) => {
  if (error) {
    console.error('Erro ao executar a consulta:', error);
  } else {
    console.log('Resultado da consulta:', results.rows);
  }
});



