const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/:id", messageController.getMessage);

module.exports = messageRouter;
