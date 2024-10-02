const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}
async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}
async function postMessage(name, text, data) {
  const { rows } = await pool.query(
    "INSERT INTO messages (username, text, added) VALUES ($1, $2, $3) RETURNING *",
    [name, text, data]
  );
  return rows[0];
}

async function deleteMessage(id) {
  const { rows } = await pool.query(
    "DELETE FROM messages WHERE id = $1 RETURNING *",
    [id]
  );
  return rows[0];
}

module.exports = {
  getMessages,
  getMessage,
  postMessage,
  deleteMessage,
};
