angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('educaNota10', {
    url: '/mainPage',
    templateUrl: 'templates/educaNota10.html',
    controller: 'educaNota10Ctrl'
  })

  .state('tabsController.estatSticas', {
    url: '/statisticPage',
    views: {
      'tab2': {
        templateUrl: 'templates/estatSticas.html',
        controller: 'estatSticasCtrl'
      }
    }
  })

  .state('tabsController.histRico', {
    url: '/historicPage',
    views: {
      'tab3': {
        templateUrl: 'templates/histRico.html',
        controller: 'histRicoCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.informaEs', {
    url: '/infoPage',
    views: {
      'tab1': {
        templateUrl: 'templates/informaEs.html',
        controller: 'informaEsCtrl'
      }
    }
  })

  .state('resultadoDaBusca', {
    url: '/resultPage',
    templateUrl: 'templates/resultadoDaBusca.html',
    controller: 'resultadoDaBuscaCtrl'
  })

  $urlRouterProvider.otherwise('/mainPage')
});