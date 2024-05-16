const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'local',
  user: 'root',
  database: 'node-complete',
  password: 'root123'
});

module.exports = pool.promise();