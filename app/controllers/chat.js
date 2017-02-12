/* John McCutchan ========================================= */
console.log('ChatCtrl-on');
app.controller('ChatCtrl', function($location, $scope, $rootScope, $firebaseObject, PostServices, LoginServices, userUID){ // arg 1 is name of control, arg 2 is function with scope name
  var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  var ref = firebase.database().ref().child("data");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
  $scope.name = $rootScope.name;
  //get uid and assign it to $scope
  $scope.uid = userUID.uid()
  console.log("$scope UID: ",$scope.uid)
  //assign local $scope uid to global scope
  $rootScope.uid = $scope.uid
  console.log("$rootScope UID: ",$rootScope.uid)
  //build chat object
  $scope.chat = {
    "uid":$rootScope.uid,
    "name": $scope.name,
    "conversation": $scope.conversation,
  }
  //function to post chat to firebase
  $scope.chatSend = ()=> {
    PostServices
    .chatSend($scope.chat)
    .then(()=>{
      $scope.getChat()
    })
  }
  $scope.getChat = ()=> {
    PostServices
    .getChat()
    .then((response)=>{
      console.log("GetChat: ", response);
      $rootScope.list = response;
      $scope.chat.conversation = null;
      console.log("GetChat Global: ", $rootScope.list);
    })
  }
  $scope.logout = ()=> {
    LoginServices
    .logout()
    .then(console.log("Logged Out"))
    .then($location.url('/'))
  }
})
