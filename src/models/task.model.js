const pool = require('../db');

module.exports = {
  getAll: async () => {
    const { rows } = await pool.query(`
      SELECT
        id,
        title,
        description,
        status,
        created_at,
        due_date,
        project_id,
        assignee
      FROM tasks
      ORDER BY id
    `);

    return rows;
  },

  getByProject: async (projectId) => {
    const { rows } = await pool.query(
      `
      SELECT
        id,
        title,
        description,
        status,
        created_at,
        due_date,
        project_id,
        assignee
      FROM tasks
      WHERE project_id = $1
      ORDER BY id
      `,
      [projectId]
    );

    return rows;
  },

  create: async ({
    title,
    description,
    status,
    due_date,
    project_id,
    assignee,
  }) => {
    const { rows } = await pool.query(
      `
      INSERT INTO tasks
      (
        title,
        description,
        status,
        due_date,
        project_id,
        assignee
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
      [
        title,
        description,
        status,
        due_date || null,
        project_id,
        assignee,
      ]
    );

    return rows[0];
  },

  updateStatus: async (taskId, status) => {
    const { rows } = await pool.query(
      `
      UPDATE tasks
      SET status = $1
      WHERE id = $2
      RETURNING *
      `,
      [status, taskId]
    );

    return rows[0];
  },
};