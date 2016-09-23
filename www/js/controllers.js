angular.module('app.controllers', [])

.service('escolaPropriedades', function() {
    var objectValue = {};
    
    return {
        setObject: function(value){
            objectValue = value;
        },
        getObject: function() {
            return objectValue;
        }
    }
})
  
.controller('educaNota10Ctrl', ['$scope', '$stateParams', '$http', 'escolaPropriedades',
function ($scope, $stateParams, $http, escolaPropriedades) 
{
    pg = 0;

    $scope.cliked = (function(escola)
    {       
        escolaPropriedades.setObject(escola);
    });

// // // codigo teste para GeoLocalização 
    // if (navigator.geolocation) 
    // {
    //     navigator.geolocation.getCurrentPosition(function(position)
    //     {
    //         $scope.$apply(function()
    //         {
    //             $scope.position = position;
    //             console.log($scope.position);
    //         });
    //     });
    // }

    $scope.escolas = [];
    $escolasArray = [];

    $scope.loadMore = function() 
    {
        url = $http.get("http://mobile-aceite.tcu.gov.br:80/nossaEscolaRS/rest/escolas?pagina=" + pg + "&quantidadeDeItens=15").success(function(listaEscola) 
        {
            $escolasArray = $escolasArray.concat(listaEscola);
            $scope.escolas = $escolasArray;
            console.log($escolasArray);
            $scope.$broadcast('scroll.infiniteScrollComplete');
            pg++;
        });    
    };
}])
   
.controller('estatSticasCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {



}])
   
.controller('histRicoCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {

}])
         
.controller('informaEsCtrl', ['$scope', '$stateParams', 'escolaPropriedades',
function ($scope, $stateParams, escolaPropriedades) 
{
    $scope.$on('$ionicView.beforeEnter', function () 
    {
        $scope.escola = escolaPropriedades.getObject();

        $scope.escola.endereco.municipio = $scope.escola.endereco.municipio.toUpperCase();
        $scope.escola.rede = $scope.escola.rede.toUpperCase(); 
        $scope.escola.situacaoFuncionamento =$scope.escola.situacaoFuncionamento.toUpperCase(); 

        if(!$scope.escola.endereco.bairro)
        {
            $scope.escola.endereco.bairro = "NÃO CADASTRADO.";
        }
        
    });
}])
   
.controller('resultadoDaBuscaCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])