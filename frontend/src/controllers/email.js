app.controller('emailCtrl', function($scope, $rootScope, Emails) {
  // console.log($rootScope.emails);
  $scope.getEmails = function(){
    Emails.getEmails().then(function(data) {
      $scope.emails = data.data
    })
  }
  $scope.addEmail = function(name, email) {
    console.log(name, email);
    Emails.addEmail(name, email)
  }
  $scope.deleteEmail = function(id){
    Emails.deleteEmail(id)
    Emails.getEmails().then(function(data) {
      $scope.emails = data.data
    })
  }
  $scope.getEmails()
})
