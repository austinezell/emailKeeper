window.app = angular.module('emailApp', ['ui.router'])
// ['ui.router']
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('/', {
    url: '/',
    templateUrl : 'views/emails.html',
    controller : 'emailCtrl'
  })
  $urlRouterProvider.otherwise('/');
})
