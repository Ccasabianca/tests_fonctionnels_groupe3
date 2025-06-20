const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let tasks = [];
let id = 1;

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
  console.log('Received task:', req.body);
  const task = { id: id++, name: req.body.name };
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});