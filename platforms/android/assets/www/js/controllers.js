angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup,$state, AuthService,Web) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.User={};
  $scope.LoginData = {};
  
  

 
  $scope.setUser = function(User) {
    $scope.User = User;
  };


  // Form data for the login modal
  /* Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/Login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  $scope.login = function() {
    
    $scope.modal.show();
  };timeout(location.reload();, 100);
  */
  $ionicModal.fromTemplateUrl('templates/Create.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });
  // Triggered in the login modal to close it
  
  $scope.closeCreate = function() {
    $scope.modal2.hide();
    
  };
  $scope.create = function() 
  {
    $scope.modal2.show();
  };
  // Perform the login action when the user submits the login form



  $scope.doCreate = function() {
    Web.WebCreate($scope,$state,$scope.LoginData.username, $scope.LoginData.password, $scope.LoginData.mail, $scope.LoginData.phone);
  }
})



.controller('LoginCtrl', function($scope, $state, $ionicModal,$ionicPopup, AuthService,Web) {
  $scope.$on('$ionicView.enter', function(e) {
    var User=AuthService.GetUser();
    if(User!=null)
    {
      $state.go('Main.System', {}, {reload: true});
    }
  });
  $scope.doLogin = function() {
    Web.WebLogin($scope,$state,$scope.LoginData.username, $scope.LoginData.password);
    $scope.LoginData={};
  };
})


 



.controller('MainCtrl', function($scope, $ionicModal, $timeout, $ionicPopup,$state, AuthService,Web) {
  $scope.User={};
  $scope.User=AuthService.GetUser();
  
  
  $scope.$on('Redzone', function(event) {
    var alertPopup = $ionicPopup.alert({
      title: 'Unauthorized!',
      template: 'You are not allowed to access this resource.'
    });
  });

  $scope.$on('Login0', function(event) {
    AuthService.logout();
    $state.go('app.Login');
    var alertPopup = $ionicPopup.alert({
      title: 'Session Lost!',
      template: 'Sorry, You have to login again.'
    });
  });
  $scope.logout = function() {
    AuthService.logout();
    $state.go('app.Home');
    var alertPopup = $ionicPopup.alert({
      title: 'Log Out!',
      template: 'You Have Made a Successful Exit.'
    });
  }

});