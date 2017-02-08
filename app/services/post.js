/* John McCutchan ========================================= */
console.log("Post Services-on");
app.service('PostServices', function($http, $q, $rootScope){
  return {
    chatSend: function(obj){
      return $http
        .post('https://velocilinx-chat.firebaseio.com/chats/.json', JSON.stringify(obj))
        .then(console.log("Post to Firebase: ", obj))
    },
    getChat: function(chat){
      return $http
      .get('https://velocilinx-chat.firebaseio.com/chats/.json')
      .then((response) => {
        return  response.data
      })
    }
  }
})
