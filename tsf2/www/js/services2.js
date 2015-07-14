angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'BedRoom',
    lastText: 'You on your way?',
    face: 'img/bedroom.jpg'
  }, {
    id: 1,
    name: 'Kitchen',
    lastText: 'Hey, it\'s me',
    face: 'img/kitchen.jpeg'
  },{
    id: 2,
    name: 'Hall',
    lastText: 'I should buy a boat',
    face: 'img/Hall.jpg'
  }];
  
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    select: function(chat){
      return chats.indexOf(chat);
    }
  };
});

