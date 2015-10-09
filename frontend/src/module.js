window.app = angular.module('emailApp', ['ui.router'])
// ['ui.router']
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('/', {
    url: '/',
    templateUrl : 'views/emails.html',
    controller : 'MainCtrl'
  })
  $urlRouterProvider.otherwise('/');
})
