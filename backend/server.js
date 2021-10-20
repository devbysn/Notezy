require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const notes = require("../backend/data/notes");
console.log(process.env.PORT);
app.get("/", (req, res) => {
  res.send("nice");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((data) => req.params.id === data._id);
  res.json(note);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
