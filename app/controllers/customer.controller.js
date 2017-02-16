/* John McCutchan ========================================= */
console.log('ChatCtrl-on');
angular.module('UserApp')
  .controller('CustomerCtrl', function(){
    var customerCtrl = this;
    customerCtrl.profile = profile;

    customerCtrl.updateProfile = function(){
      customerCtrl.profile.emailHash = md5.createHash(auth.email);
      customerCtrl.profile.$save().then(function(){ // displayNamermdir channels
        $state.go('chat');
      });
    }
  })
