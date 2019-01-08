const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const load = require('express-load');
const moment = require('moment');
const expressValidator = require('express-validator');
const env  = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

const app = express();

app.set('superNode-auth', config.configName);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(session({secret: 'igor'}));
app.use(express.static(path.join(__dirname, 'public')));

//helpers
app.use((req,res,next)=>{
  res.locals.session = req.session.usuario;
  res.locals.isLogged = req.session.usuario ? true : false;
  res.locals.moment = moment;
  next();
});

load('repositories').then('controllers').then('routes').then('utils').then('schedules').into(app);

module.exports = app;
