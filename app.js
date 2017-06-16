var express = require('express');
var session = require('express-session');
var parser = require('body-parser');
var morgan = require('morgan');
var router = require('./server/router/router.js');
var path = require('path');
var app = express();

var db = require('./db/models/cityModel.js');

app.use(morgan('dev'));
app.use(parser.json());

//Route to static files
app.use(express.static(path.resolve(__dirname, './public')));

app.use('/api', router);

app.set('port', process.env.PORT || 1337);
app.listen(app.get('port'));

module.exports.app = app;
