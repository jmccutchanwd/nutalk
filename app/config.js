/* John McCutchan ========================================= */
console.log("Config-on");
app.config(function ($routeProvider, $urlRouterProvider){
  var config = {
    apiKey: "AIzaSyAT3nZ5i2HSjhZbQbeulTd1J5wM2OAq5uU",
    authDomain: "velocilinx-chat.firebaseapp.com",
    databaseURL: "https://velocilinx-chat.firebaseio.com",
    storageBucket: "velocilinx-chat.appspot.com",
    messagingSenderId: "168034279158"
  };
  firebase.initializeApp(config);
  //
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html'
    })
    .state('main', {
      url: '/main',
      controller: 'MainCtrl',
      templateUrl: 'partials/start.html'
    })
    .state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'partials/login.html'
    })
    .state('chat', {
      url: '/chat',
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
