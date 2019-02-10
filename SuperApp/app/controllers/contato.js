var contatos = [
  {_id: 1, nome: 'Contato Exmplo 1', email: 'cont1@empresa.jp'},
  {_id: 2, nome: 'Contato Exmplo 2', email: 'cont2@empresa.jp'},
  {_id: 3, nome: 'Contato Exmplo 3', email: 'cont3@empresa.jp'}
];

  const listaContatos = (req, res) => {
    res.json(contatos);
  };

  const obtemContato = (req, res) => {
    const idContato = req.params.id;
    const contato = contatos.filter( (contato) => {
      return contato._id == idContato;
    })[0];
    contato ?
    res.json(contato) :
    res.status(404).send('Contato não encontrado');
  };

  const removeContato = function(req, res) {
    const idContato = req.params.id;
    contatos = contatos.filter( (contato) => {
      return contato._id != idContato;
    });
    res.status(204).end();
    console.log('API: removeContato: ');
  };




module.exports = {
  listaContatos, obtemContato, removeContato
}