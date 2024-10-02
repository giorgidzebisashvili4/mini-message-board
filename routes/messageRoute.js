const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});
messageRouter.post("/new", messageController.postMessage);
messageRouter.get("/delete/:id", messageController.deleteMessage);
// messageRouter.get("/edit/:id", messageController.editMessage);
messageRouter.get("/:id", messageController.getMessage);

module.exports = messageRouter;
