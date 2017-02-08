/* John McCutchan ========================================= */
console.log("Config-on");
app.config(function ($routeProvider, $locationProvider){
  var config = {
    apiKey: "AIzaSyAT3nZ5i2HSjhZbQbeulTd1J5wM2OAq5uU",
    authDomain: "velocilinx-chat.firebaseapp.com",
    databaseURL: "https://velocilinx-chat.firebaseio.com",
    storageBucket: "velocilinx-chat.appspot.com",
    messagingSenderId: "168034279158"
  };
  firebase.initializeApp(config);
  const checkForAuth = {
      checkForAuth ($location) {
        // http://stackoverflow.com/questions/37370224/firebase-stop-listening-onauthstatechanged
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/')
          }
        })
      }
    }
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html'
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'partials/login.html'
    })
    .when('/chat', {
      controller: 'ChatCtrl',
      templateUrl: 'partials/chat.html',
      resolve:{
        "userUID" : function(){
          return {
            uid: function(){
              return firebase.auth().currentUser.uid
            }
          }
        }
      }

    })
    .otherwise({
      redirectTo: '/'
    })
})
//
app.run(function($rootScope){
  $rootScope.name = "";
  $rootScope.uid = "";
})
