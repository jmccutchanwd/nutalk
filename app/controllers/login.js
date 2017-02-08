/* John McCutchan ========================================= */
console.log('LoginCtrl-on');
app.controller('LoginCtrl', function($scope, LoginServices,$location,$rootScope){
  $scope.login = () => {
    $rootScope.name = $scope.name;// assigns name to global variable
    LoginServices
    .login($scope.email, $scope.password)
    .then (console.log("Signed In"))
    .then(() => $location.url('/chat'))
  }
  $scope.logout = () => {
    LoginServices
    .logout()
    .then(()=> $location.url('/'))
  }
  $scope.cancel = function(){
      $location.url('/')
    }
})
