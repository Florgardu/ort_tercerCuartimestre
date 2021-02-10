let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// acá están definidos los routers
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let pruebaRouter = require('./routes/prueba');
let inventorsRouter = require('./routes/inventors');



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// acá arrancan los ruteos 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users/prueba', usersRouter);
app.use('/prueba', pruebaRouter);
app.use('/prueba/saludar', pruebaRouter);

// ruteo de inventors  

app.use('/inventors', inventorsRouter);
app.use('/inventors/:id', inventorsRouter);








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
