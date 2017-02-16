/* John McCutchan ========================================= */
console.log("Login services-on");
angular.module('UserApp')
  .service('LoginServices', function($firebaseAuth){
    var auth = $firebaseAuth();
    return auth;
})
