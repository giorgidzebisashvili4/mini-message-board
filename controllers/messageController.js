const db = require("../db/queries");
async function getMessage(req, res) {
  const message = await db.getMessage(req.params.id);
  res.render("messageDetail", { title: "Message Detail", message: message });
}

module.exports = {
  getMessage,
};
