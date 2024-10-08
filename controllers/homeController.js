const db = require("../db/queries");
async function getMessages(req, res) {
  const messages = await db.getMessages();
  console.log(messages);
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
  });
}

module.exports = {
  getMessages,
};
