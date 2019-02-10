var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


module.exports = function(){
  var app = express();

  // varíaveis de ambiente
  app.set('port', 3000);

  // middleware
  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views', './app/views');
  
  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

/*
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
*/     

  return app;
}