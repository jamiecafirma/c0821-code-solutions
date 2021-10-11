const express = require('express');
const app = express();
const fs = require('fs');
const notesJSON = require('./data.json');

app.use('/', express.json());

function rewriteNotes(notes) {
  const updatedNotes = JSON.stringify(notes, null, 2);
  fs.writeFile('data.json', updatedNotes, 'utf-8', function (err, res) {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
      process.exit(1);
    }
  });
}

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const id in notesJSON.notes) {
    notesArr.push(notesJSON.notes[id]);
  }
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const noteKey = parseInt(req.params.id);
  if (Number.isInteger(noteKey) === false || noteKey < 0) {
    res.status(400).json({ error: 'ID is not a positive integer' });
  } else if (notesJSON.notes[noteKey] !== undefined) {
    res.status(200).json(notesJSON.notes[noteKey]);
  } else {
    res.status(404).json({ error: 'Note cannot be found at inputted id' });
  }
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;

  if (newNote.content === undefined) {
    res.status(400).json({ error: 'Note must have a content property' });
  } else {
    newNote.id = notesJSON.nextId;
    notesJSON.notes[notesJSON.nextId] = newNote;
    notesJSON.nextId++;
    rewriteNotes(notesJSON);
    res.status(201).json(newNote);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteKey = parseInt(req.params.id);

  if (Number.isInteger(deleteKey) === false || deleteKey < 0) {
    res.status(400).json({ error: 'ID is not a positive integer' });
  } else if (notesJSON.notes[deleteKey] === undefined) {
    res.status(404).json({ error: 'Note does not exist at inputted id' });
  } else {
    delete notesJSON.notes[deleteKey];
    rewriteNotes(notesJSON);
    res.status(204).json();
  }
});

app.put('/api/notes/:id', (req, res) => {
  const replaceKey = parseInt(req.params.id);
  const newNote = req.body;

  if (Number.isInteger(replaceKey) === false || replaceKey < 0) {
    res.status(400).json({ error: 'ID is not a positive integer' });
  } else if (newNote.content === undefined) {
    res.status(400).json({ error: 'Note must have a content property' });
  } else if (notesJSON.notes[replaceKey] === undefined) {
    res.status(404).json({ error: 'Note cannot be found at inputted id' });
  } else {
    notesJSON.notes[replaceKey].content = newNote.content;
    rewriteNotes(notesJSON);
    res.status(200).json(notesJSON.notes[replaceKey]);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
