const express = require("express");
const app = express();

const homeRouter = require("./routes/homeRoute");
const messageRouter = require("./routes/messageRoute");

const path = require("node:path");
// serving static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("home", { messages });
});

app.get("/message", (req, res) => {
  res.render("message", { messages });
});

// app.use("/", homeRouter);
// app.use("/message", messageRouter);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
