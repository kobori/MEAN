
module.exports = (app) => {
  const controller = app.controllers.contato;

  app.route('/contatos')
    .get(controller.listaContatos);

  app.route('/contatos/:id')
    .get(controller.obtemContato)
    .delete(controller.removeContato);
}