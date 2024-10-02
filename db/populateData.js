#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text TEXT,
  added TIMESTAMP
);

INSERT INTO messages (username, text, added) 
VALUES 
  ('Amando', 'Hi there!', NOW()),
  ('Charles', 'Hello World!', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`,
  });
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Messages seeded successfully.");
  } catch (err) {
    console.error("Error seeding messages:", err);
  } finally {
    await client.end();
  }
  console.log("done");
}

main();
