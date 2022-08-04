// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');

const app = express();

// mongoose connection to databases........

const url = 'mongodb://localhost/RegDb';
mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB..'))
  .catch((err) => console.error('Could note connect to Mongo..', err));

app.use(express.json());
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listing port ${port}.... `));
