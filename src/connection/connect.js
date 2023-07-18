const pg = require("pg");

const pool = new pg.Pool({
  database: "",
  password: "",
  user: "postgres",
  port: 5432,
  host: "localhost",
});

async function fetch(query, ...params) {
  try {
    const client = await pool.connect();
    const {
      rows: [data],
    } = await client.query(query, params);
    return data;
  } catch (error) {
    return error.message;
  }
}

async function fetchAll(query, ...params) {
  try {
    const client = await pool.connect();
    const { rows } = await client.query(query, params);
    return rows;
  } catch (error) {
    return error.message;
  }
}

module.exports = { fetch, fetchAll };
