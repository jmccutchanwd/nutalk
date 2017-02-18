angular.module('UserApp')
  .factory('Auth', function($firebaseAuth){

    var auth = $firebaseAuth();

    return auth;
  });
