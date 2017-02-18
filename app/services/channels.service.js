angular.module('UserApp')
  .factory('Channels', function($firebaseArray){

    var ref = firebase.database().ref('channels');

    var channels = $firebaseArray(ref); // lists all channels in array

    return channels;
  });
