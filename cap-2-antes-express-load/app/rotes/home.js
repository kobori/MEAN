var controller = require('../controller/home')();

module.exports = function(app){
  app.get('/', controller.index);
}