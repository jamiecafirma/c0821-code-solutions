const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
  select *
      from "grades";
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res, next) => {
  const newGrade = req.body;

  if (newGrade.name === undefined) {
    res.status(400).json({ error: 'grade must have a name property' });
  } else if (typeof newGrade.name !== 'string') {
    res.status(400).json({ error: 'name must be a valid name with letter characters' });
  } else if (newGrade.course === undefined) {
    res.status(400).json({ error: 'grade must have a course property' });
  } else if (typeof newGrade.course !== 'string') {
    res.status(400).json({ error: 'course must be a valid course with letter characters' });
  } else if (newGrade.score === undefined) {
    res.status(400).json({ error: 'grade must have a score property' });
  } else if (Number.isInteger(newGrade.score) === false || newGrade.score < 0 || newGrade.score > 100) {
    res.status(400).json({ error: 'score must be an integer from 0 to 100' });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;
    const values = [newGrade.name, newGrade.course, newGrade.score];
    db.query(sql, values)
      .then(result => {
        const addedGrade = result.rows[0];
        res.status(201).json(addedGrade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const updateGrade = req.body;
  if (Number.isInteger(gradeId) === false || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
  } else if (updateGrade.name === undefined) {
    res.status(400).json({ error: 'grade must have a name property' });
  } else if (typeof updateGrade.name !== 'string') {
    res.status(400).json({ error: 'name must be a valid name with letter characters' });
  } else if (updateGrade.course === undefined) {
    res.status(400).json({ error: 'grade must have a course property' });
  } else if (typeof updateGrade.course !== 'string') {
    res.status(400).json({ error: 'course must be a valid course with letter characters' });
  } else if (updateGrade.score === undefined) {
    res.status(400).json({ error: 'grade must have a score property' });
  } else if (Number.isInteger(updateGrade.score) === false || updateGrade.score < 0 || updateGrade.score > 100) {
    res.status(400).json({ error: 'score must be an integer from 0 to 100' });
  } else {
    const sql = `
    update "grades"
        set "name"   = $1,
            "course" = $2,
            "score"  = $3
      where "gradeId" = $4
    returning *;
    `;
    const values = [updateGrade.name, updateGrade.course, updateGrade.score, gradeId];
    db.query(sql, values)
      .then(result => {
        const changedGrade = result.rows[0];
        if (!changedGrade) {
          res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
        } else {
          res.status(200).json(changedGrade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (Number.isInteger(gradeId) === false || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
  } else {
    const sql = `
    delete from "grades"
      where "gradeId" = $1
    returning *;
    `;
    const values = [gradeId];
    db.query(sql, values)
      .then(result => {
        const deletedGrade = result.rows[0];
        if (!deletedGrade) {
          res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
