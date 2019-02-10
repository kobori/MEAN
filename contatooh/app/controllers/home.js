/*
module.exports = function() {
  var controller = {};
  controller.index = function(req, res) {
    res.render('index', {nome: 'Express - Node JS'});
  };
  return controller;
}
*/

module.exports.index = (req, res) => {
  res.render('index', { 
    nome: 'Olá Express'
  });
}