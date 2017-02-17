/* John McCutchan ========================================= */
console.log('CustomerCtrl-on');
angular.module('UserApp')
  .controller('CustomerCtrl', function($state, md5, auth, profile){
    var customerCtrl = this;
    customerCtrl.profile = profile;

    customerCtrl.updateProfile = function(){
      customerCtrl.profile.emailHash = md5.createHash(auth.email);
      customerCtrl.profile.$save().then(function(){ // displayNamermdir channels
        $state.go('chat');
      });
    }
  })
