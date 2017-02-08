/* John McCutchan ========================================= */
console.log("Login services-on");
app.service('LoginServices', function($http, $q, $location){

  return {
    login: function(email, pass){
      return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, pass))
    },
    logout: function(){
      var user = firebase.auth().currentUser;
      return user.delete()
    }
  }

})
