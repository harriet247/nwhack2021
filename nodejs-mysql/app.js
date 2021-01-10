var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var displayRouter = require('./routes/dashboard');
var postRouter = require('./routes/post');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/post', postRouter);
app.use('/display', displayRouter);

module.exports = app;