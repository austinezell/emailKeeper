app.service('Emails', function($http){
  this.getEmails =function(){
    $http.get('http://localhost:3000/contacts')
  }

  this.addEmail = function(name, email){
    var obj = {name: name, email: email}
    $http.post("http://localhost:3000/addContact", obj)
    .then(function(data){
      console.log(data);
    })
  }

})
