
const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',
  host: '127.0.0.1',
  database: 'database_development',
  password: '123456',
  port: 5432,
});

module.exports = pool;
