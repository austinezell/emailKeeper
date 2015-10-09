app.service('Contacts', function($http, $rootScope){
  this.getContacts =function(){
    return $http.get('http://localhost:3000/contacts')
  }

  this.deleteContact = function (id) {
    return $http.delete('http://localhost:3000/removeContact/'+id)
  }

  this.addContact = function(contact){
    return $http.post("http://localhost:3000/addContact", contact)
  }

  this.sendEmail = function(email){
    return $http.post('http://localhost:3000/send', email)
  }

  this.validateEmail = function(email){
    if (/(\w+\.)*\w+@((\w+\.)+\w+)/.test(email)){
      return true;
    }
    return false;
  }

})
