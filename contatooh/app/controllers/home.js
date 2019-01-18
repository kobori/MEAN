module.exports = function() {
  var controller = {};
  controller.index = function(req, res) {
    res.render('index', {nome: 'Express - Node JS'});
  };
  return controller;
}