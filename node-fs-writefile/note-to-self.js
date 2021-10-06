const fs = require('fs');
const userNote = process.argv[2] + '\n';

fs.writeFile('note.txt', userNote, 'utf-8', function (err) {
  if (err) throw err;
});
