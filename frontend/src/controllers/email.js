app.controller('emailCtrl', function($scope, $rootScope, Emails) {
  $scope.getEmails = function(){
    Emails.getEmails().then(function(data) {
      $scope.emails = data.data
    })
  }
  $scope.addEmail = function(name, email) {
    Emails.addEmail(name, email).then(function(data){
      $scope.getEmails()
      $scope.name = ''
      $scope.email = ''
    })
  }
  $scope.deleteEmail = function(id){
    Emails.deleteEmail(id).then(function(){
      $scope.getEmails();
    })
  }
  $scope.sendEmail = function(email){
    Emails.sendEmail(email)
  }

  $scope.getEmails();


})
