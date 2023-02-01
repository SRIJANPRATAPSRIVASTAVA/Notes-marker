import express from "express";
import { getNote, getNotes } from "./controllers/note.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/notes", getNotes);

app.get("/api/notes/:id", getNote);

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
