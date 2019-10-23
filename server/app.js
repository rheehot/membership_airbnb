const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
const db = require('./models');

const app = express();

db.sequelize
  .authenticate()
  .then(() => {
    console.log('DB Connect.');
  })
  .catch((err) => {
    console.error('error occured : ', err);
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./controllers'));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(process.env.PORT || 3000, async () => {
  const port = server.address();
  console.log(`Express server listening on port  ${port.port}`);
});

module.exports = app;
