/* John McCutchan ========================================= */
console.log("Login services-on");
angular.module('UserApp')
  .factory('Login', function($firebaseAuth){
    var auth = $firebaseAuth();
    return auth;
})
