angular.module('contatooh')
  .controller('ContatosController', 
    function($scope, $resource) {

      $scope.contatos = [];

      $scope.filtro = '';

      var Contato = $resource('/contatos/:id');

      function buscaContatos(){
        Contato.query(function(contatos) {
          $scope.contatos = contatos;
        }, 
        function(erro) {
          console.log("Não foi possível obter a lista de contatos");
          console.log(erro);
        });
      };
      buscaContatos();
})