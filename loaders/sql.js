const { Client } = require('pg');

const sqlClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'voicedb',
  password: 'hichki@1990',
  port: 5432,
});

module.exports = sqlClient;
