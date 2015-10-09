app.service('Emails', function($http, $rootScope){
  this.getEmails =function(){
    return $http.get('http://localhost:3000/contacts')
  }

  this.deleteEmail = function (id) {
    return $http.delete('http://localhost:3000/removeContact/'+id)
  }

  this.addEmail = function(name, email){
    var obj = {name: name, email: email}
    return $http.post("http://localhost:3000/addContact", obj)
  }

  this.sendEmail = function(email){
    $http.post('http://localhost:3000/send', email)
    .then(function(data){
      console.log(data);
    })
  }

})
