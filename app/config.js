/* John McCutchan ========================================= */
console.log("Config-on");
app.config(function ($stateProvider, $urlRouterProvider){
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
      controller: 'MainCtrl as mainCtrl',
      templateUrl: 'partials/main.html',
    })
    .state('main', {
      url: '/main',
      controller: 'MainCtrl as mainCtrl',
      templateUrl: 'partials/start.html',
    })
    .state('login', {
      url: '/login',
      controller: 'LoginCtrl as loginCtrl',
      templateUrl: 'partials/login.html',
    })
    .state('chat', {
      url: '/chat',
      controller: 'ChatCtrl as chatCtrl',
      templateUrl: 'partials/chat.html',
    })
    .otherwise({
      redirectTo: '/'
    })
})
