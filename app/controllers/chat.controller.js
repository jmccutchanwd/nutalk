/* John McCutchan ========================================= */
console.log('ChatCtrl-on');
angular.module('UserApp')
  .controller('ChatCtrl', function($state, Login, Chat, channels, profile){
    var chatCtrl = this;

    Customers.setOnline(profile.$id);

    chatCtrl.profile = profile;
    chatCtrl.channels = channels;
    chatCtrl.users = Chat.all;
    chatCtrl.getDisplayName = Chat.getDisplayName;
    Chat.setOnline(channelsCtrl.profile.$id);

    chatCtrl.newChannel = {
      name: ''
    };

    chatCtrl.logout = function(){
      chatCtrl.profile.online = null;
      chatCtrl.profile.$save().then(function(){
        Login.$signOut().then(function(){
          $state.go('home');
        });
      });
    };

    // chatCtrl.chatChannel = {
    //   name: chatCtrl.getDisplayName
    // };


  })
