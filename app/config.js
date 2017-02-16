/* John McCutchan ========================================= */
console.log("Config-on");
angular.module('UserApp', ['firebase', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider){
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
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl as mainCtrl'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'partials/start.html',
      controller: 'MainCtrl as mainCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl as loginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'partials/register.html',
      controller: 'RegisterCtrl as registerCtrl'
    })
    .state('chat', {
      url: '/chat',
      templateUrl: 'partials/chat.html',
      controller: 'ChatCtrl as chatCtrl'
    })

    $urlRouterProvider.otherwise('/');
})
