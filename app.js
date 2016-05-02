var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var engine = require('ejs-locals');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var session = require('express-session');
var app = express();


// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.engine('ejs', engine);
app.set('view engine', 'ejs');
// app.use(express.favicon());
// app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(express.logger('dev'));
app.use(morgan('combined'));
//parse application/json
// app.use(bodyParser()); // pull information from html in POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// app.use(express.methodOverride());
app.use(methodOverride());
// app.use(app.router);
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'ark'
}));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(serveStatic(__dirname + '/public'));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('server start! port: ' + app.get('port'));
});

module.exports = app;
