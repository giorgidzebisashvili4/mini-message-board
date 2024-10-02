const db = require("../db/queries");
async function getMessage(req, res) {
  const message = await db.getMessage(req.params.id);
  res.render("messageDetail", { title: "Message Detail", message: message });
}

async function postMessage(req, res) {
  const { name, message } = req.body;
  const data = new Date();
  const newMessage = await db.postMessage(name, message, data);
  console.log(newMessage);
  res.redirect(`/`);
}

async function deleteMessage(req, res) {
  const { id } = req.params;
  await db.deleteMessage(id);
  res.redirect("/");
}

module.exports = {
  getMessage,
  postMessage,
  deleteMessage,
};
