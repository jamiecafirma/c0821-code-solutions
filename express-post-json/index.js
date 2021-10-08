const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.use('/', express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  grades[nextId] = newGrade;
  newGrade.id = nextId;
  nextId++;
  res.status(201).json(newGrade);
});

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const id in grades) {
    gradesArr.push(grades[id]);
  }
  res.json(gradesArr);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
