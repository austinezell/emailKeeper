app.controller('MainCtrl', function($scope, $rootScope, Contacts) {

  $scope.getContacts = function(){
    Contacts.getContacts().then(function(data) {
      $scope.contacts = data.data
    })
  }

  $scope.addContact = function(contact) {
    if(Contacts.validateEmail(contact.email)){
      Contacts.addContact(contact).then(function(data){
        $scope.getContacts()
        $scope.name = ''
        $scope.email = ''
        $scope.emailMessage = "Contact added!"
      })
    }
    else{
      $scope.emailMessage = "Improper Email!"
    }
  }

  $scope.deleteContact = function(id){
    Contacts.deleteContact(id).then(function(){
      $scope.getContacts();
    })
  }

  $scope.sendEmail = function(email){
    Emails.sendEmail(email)
    .then(function(data){
      if(data.data === 'error'){
        $scope.message = "There was an error. Check entries and try again."
      }
      else{
        $scope.message = "Email sent!"
      }
    })
  }

  $scope.getContacts();


})
