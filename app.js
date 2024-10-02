const express = require("express");
const app = express();

const homeRouter = require("./routes/homeRoute");
const messageRouter = require("./routes/messageRoute");

// const path = require("node:path");
// // serving static assets
// const assetsPath = path.join(__dirname, "public");
// app.use(express.static(assetsPath));

// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/message", messageRouter);

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];

// app.get("/", (req, res) => {
//   res.render("index", { title: "Mini Messageboard", messages: messages });
// });

// app.get("/new", (req, res) => {
//   res.render("form", { title: "Mini Messageboard" });
// });

// app.get("/new/:id", (req, res) => {
//   const messageId = parseInt(req.params.id, 10);
//   if (messageId >= 0 && messageId < messages.length) {
//     const message = messages[messageId];
//     res.render("messageDetail", { title: "Message Detail", message: message });
//   } else {
//     res.status(404).send("Message not found");
//   }
// });
// app.use(express.urlencoded({ extended: true }));

// app.post("/new", (req, res) => {
//   const message = {
//     text: req.body.message,
//     user: req.body.name,
//     added: new Date(),
//   };
//   messages.push(message);
//   res.redirect("/");
// });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
