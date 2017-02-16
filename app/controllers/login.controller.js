/* John McCutchan ========================================= */
console.log('LoginCtrl-on');
angular.module('UserApp')
  .controller('LoginCtrl', function(Login, $state){
    var loginCtrl = this;
    loginCtrl.user = {
      email: '',
      password: ''
    }
    loginCtrl.login = function(){
      Login.$signInWithEmailAndPassword(loginCtrl.user.email, loginCtrl.user.password)
      .then(function(login){
        $state.go('home');
      }, function(error){
        loginCtrl.error = error;
      });
    };
    loginCtrl.register = function(){
      Login.$createUserWithEmailAndPassword(loginCtrl.user.email, loginCtrl.user.password)
      .then(function(user){
        loginCtrl.login();
      }, function(error){
        loginCtrl.error = error;
      });
    };
  });
