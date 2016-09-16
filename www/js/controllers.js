angular.module('app.controllers', [])

.service('sharedProperties', function() {
    var objectValue = { nome: ''};
    
    return {
        setObject: function(value){
            objectValue = value;
        },
        getObject: function() {
            return objectValue;
        }
    }
})
  
.controller('educaNota10Ctrl', ['$scope', '$stateParams', '$http', 'sharedProperties',
  function ($scope, $stateParams, $http, sharedProperties) {
    pg = 0;  
    sharedProperties.setObject(nome= 'casass1212');
    $scope.testeAlteracao = sharedProperties.getObject();
    $scope.escolas = [];
    $escolasArray = [];
    $scope.loadMore = function() {
        url = $http.get("http://mobile-aceite.tcu.gov.br:80/nossaEscolaRS/rest/escolas?pagina=" + pg + "&quantidadeDeItens=15").success(function(listaEscola) {
        $escolasArray = $escolasArray.concat(listaEscola);
        $scope.escolas = $escolasArray;
        console.log($escolasArray);
        $scope.$broadcast('scroll.infiniteScrollComplete');
        pg++;
    });    
  };
}])
   
.controller('estatSticasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])
   
.controller('histRicoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
         
.controller('informaEsCtrl', ['$scope', '$stateParams', 'sharedProperties',
function ($scope, $stateParams, sharedProperties) {
  $scope.escolaObj = sharedProperties.getObject();

}])
   
.controller('resultadoDaBuscaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 