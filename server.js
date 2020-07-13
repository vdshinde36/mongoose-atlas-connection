const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./foodRoutes.js');

const app = express();
app.use(express.json()); 

mongoose.connect('mongodb+srv://devloper:atc9dpfoxtrot@cluster0.xrbil.gcp.mongodb.net/foodtest?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(foodRouter);

app.listen(3000, () => { console.log('Server is running...') });