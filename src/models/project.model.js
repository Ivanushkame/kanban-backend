const pool = require('../db');

module.exports = {
  getAll: async () => {
    const { rows } = await pool.query(
      'SELECT id, name, description FROM projects ORDER BY id'
    );
    return rows;
  },

  getById: async (id) => {
    const { rows } = await pool.query(
      'SELECT id, name, description FROM projects WHERE id = $1',
      [id]
    );
    return rows[0];
  },

  create: async (name, description) => {
    const { rows } = await pool.query(
      'INSERT INTO projects (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    return rows[0];
  }
};