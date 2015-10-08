app.controller('emailCtrl', function($scope, Emails){
  // Emails.getEmails().success(function(res){
  //   $scope.emails = res
  // });
  $scope.addEmail = function(name, email){
    console.log(name, email);
    Emails.addEmail(name, email)
  }
})
