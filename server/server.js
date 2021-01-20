const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter.js');
const listRouter = require('./routes/listRouter.js');

const db = require('./models/freshModel');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8000', // what should this be?
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

/* FLOW METHOD */
app.use((req, res, next) => {
  console.log(`
  🍕🍕🍕 FLOW METHOD 🍕🍕🍕\n
  URL: ${req.url}\n
  METHOD: ${req.method}\n
  *******************\n`);
  return next();
});

// Any requests to auth will be handled within authRouter.js
app.use('/auth', authRouter);

// Any requests to list will be handled within listRouter.js
app.use('/lists', listRouter);

/** *  MAIN PAGE HANDLER ** */

// directs the request to the assets folder for images
app.use('/assets', express.static(path.join(__dirname, '../client/assets')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/*', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../index.html'))
);

// catch all
app.use('*', (req, res, next) =>
  res.status(404).send("This is not the page you're looking for...")
);

// default error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'Internal Server Error' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('👀 Server listening on port: 3000... 👀 ');
});

module.exports = app;
