
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0', 
    info: {
      title: 'API de Controle de Obras', 
      version: '1.0.0', 
      description: 'Documentação da API de Controle de Obras', 
    },
  },
  apis: ['**/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
