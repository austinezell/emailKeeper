app.service('Emails', function($http, $rootScope){
  this.getEmails =function(){
    return $http.get('http://localhost:3000/contacts')
  }

  this.deleteEmail = function (id) {
    $http.delete('http://localhost:3000/removeContact/'+id)
    .then(function(data){
      console.log(data);
    })
  }

  this.addEmail = function(name, email){
    var obj = {name: name, email: email}
    $http.post("http://localhost:3000/addContact", obj)
    .then(function(data){
      console.log(data);
    })
  }

})
