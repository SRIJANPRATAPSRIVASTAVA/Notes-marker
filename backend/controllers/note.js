import notes from "../data/notes.js";

export const getNotes = (req, res) => {
  res.json(notes);
};

export const getNote = (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => (note._id = id));
  res.send(note);
};
