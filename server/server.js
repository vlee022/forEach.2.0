const express = require('express');
const path = require('path');
// const { get } = require('http');

const PORT = 3000;
const app = express();
const apiRouter = require('./routes/api.js');

// Build out router files
// Build out POST request for donation/sign up in api
// Build out POST request for sign/up in API
// Build out POST request for login
// GET REQUEST for user account data
// GET Request for shout outs / guestbook
// Authentication for write access to guestbook

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => { 
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
