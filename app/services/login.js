/* John McCutchan ========================================= */
console.log("Login services-on");
app.service('LoginServices', function($http, $q){
  return {
    login: function(email, pass){
      return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, pass))
    },
    logout: function(){
      return $q.resolve(firebase.auth().currentUser.logout())//test this******
    }
  }
})
