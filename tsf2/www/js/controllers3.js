angular.module('starter.controllers', ['ionic'])

.controller('SetupCtrl', function($scope) {})

.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl', function($scope,$stateParams,$location,$http, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  
 $scope.chats=Chats.all();
  $scope.$on('$ionicView.enter', function(){
    var temp=$location.path();
    $scope.selected=temp[temp.length-1];

//    console.log($scope.location);
  // Any thing you can think of
});
   
  $scope.remove = function(chat) {
    Chats.remove(chat);

  }
   $scope.select= function(index) {
       //$scope.selected=Chats.select(chat);
        $scope.location=$location.path();
        //console.log($scope.location);
        
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams,$location,$ionicPopup,$timeout,$ionicModal, Chats) {
   
  $scope.chat = Chats.get($stateParams.chatId);
  $stateParams.chatId;
  $scope.toggle=false;
  $scope.listCanSwipe = true
   $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });
    
  $scope.change=function(){
    console.log($scope.toggle);
    if ($scope.toggle) {$scope.toggle=false;}
    else {$scope.toggle=true};
  }
   $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
    title:'Turn All Lights',
    buttons: [{
      text: 'On',
      type: 'button-balanced',

    },
    {
      text:'Off',
      type: 'button-dark'
    }
    ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };
   $scope.showPopup2 = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
    title:'Turn All Fans',
    buttons: [{
      text: 'On',
      type: 'button-balanced',

    },
    {
      text:'Off',
      type: 'button-dark'
    }
    ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };

 
})
.directive('closeOption', function($ionicGesture, $ionicListDelegate,$ionicPopup) {
  return {
    restrict :  'A',

    link : function(scope, elem, attrs) {
     $ionicGesture.on('touch', function(e){
       $ionicListDelegate.closeOptionButtons();
       console.log("Hello World");
      $ionicPopup.close();
     }, elem);
     
    }
  }
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

.controller('WelcomeCtrl', function($scope) {

  };

