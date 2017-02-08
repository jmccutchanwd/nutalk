/* John McCutchan ========================================= */
/*


REMOVE THIS FOR PRODUCTION


*/
console.log("Test Ctrl-on");
app.controller('TestCtrl', function($scope, TestServices){
  $scope.tech = {
    "nameFirst": "John",
    "nameLast": "Doe",
    "uid": "555666777",
    "email": "john.doe@corp.email",
    "employeeNumber": "544567890",
    "loggedIn": false,
    "consoleView": true,
    "viewArchive": true,
    "searchChat": true,
    "searchByTech": true,
    "genEmailReport": true,
  }
  $scope.techSend = () => {
    TestServices
    .techSend($scope.tech)
  }
})
console.log("Test Services-on");
app.service('TestServices', function($http, $q){
  return {
    techSend: function(obj){
      return $http
      .post('https://velocilinx-chat.firebaseio.com/techs/.json', JSON.stringify(obj))
      .then(console.log("Sent to Firebase: ", obj))
    }
  }
})
//===========================================================END
