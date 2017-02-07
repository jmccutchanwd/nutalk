/* John McCutchan ========================================= */
console.log('LoginCtrl-on');
app.controller('LoginCtrl', function($scope, LoginServices,$location){
  $scope.login = () => {
    LoginServices
    .login($scope.email, $scope.password)
    .then (console.log("Signed In"))
    .then(() => $location.url('/chat'))
  }
  $scope.logout = () =>{
    LoginServices
    .logout()
    .then(()=> $.location.url('/'))
  }
})
