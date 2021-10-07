const fs = require('fs');
const userAction = process.argv[2];
const userNotes = require('./data.json');

function readNotes() {
  fs.readFile('data.json', 'utf-8', function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    for (const id in userNotes.notes) {
      console.log(`${id}: ${userNotes.notes[id]}`);
    }
  });
}

function rewriteNotes(notes) {
  const updatedNotes = JSON.stringify(notes, null, 2);
  fs.writeFile('data.json', updatedNotes, 'utf-8', function (err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}

function addNote() {
  const newNote = process.argv[3];
  userNotes.notes[userNotes.nextId] = newNote;
  userNotes.nextId++;
  rewriteNotes(userNotes);
}

function deleteNote() {
  const deleteKey = process.argv[3];
  if (userNotes.notes[deleteKey] === undefined) {
    console.log('note does not exist at inputted id');
  } else {
    delete userNotes.notes[deleteKey];
    rewriteNotes(userNotes);
  }
}

function updateNote() {
  const updateKey = process.argv[3];
  const noteContent = process.argv[4];
  if (userNotes.notes[updateKey] === undefined) {
    console.log('note does not exist; user can "add" note instead');
  } else {
    userNotes.notes[updateKey] = noteContent;
    rewriteNotes(userNotes);
  }
}

if (userAction === 'read') {
  readNotes();
} else if (userAction === 'create') {
  addNote();
} else if (userAction === 'delete') {
  deleteNote();
} else if (userAction === 'update') {
  updateNote();
} else {
  console.log('invalid user action; user can "read", "create", "delete", or "update"');
}
