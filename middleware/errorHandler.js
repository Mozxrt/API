
const expressAsyncErrors = require('express-async-errors');

class ErrorHandler {
  static async handleErrors(err, req, res, next) {
    if (err.name === 'SequelizeValidationError') {
      const validationErrors = err.errors.map((error) => ({
        field: error.path,
        message: error.message,
      }));
      res.status(400).json({ errors: validationErrors });
    } else {
      // Qualquer outro erro
      res.status(500).json({ error: 'Ocorreu um erro interno no servidor' });
    }
  }
}

module.exports = ErrorHandler;
