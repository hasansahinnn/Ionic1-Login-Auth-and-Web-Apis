angular.module('starter')

.service('AuthService', function($q, $http) {
  var username = '';
  var isAuthenticated = false;
  var role = '';
  var User={};
  var UserSession;

  LoadUserSession();
       
  function UserSession(User5) {
    User=User5;
    localStorage.setItem('UserSession', JSON.stringify(User5));
    isAuthenticated=true;
   } 

   function LoadUserSession() {
    var User3 = JSON.parse(localStorage.getItem('UserSession'));
    if(User3!=null)
    {
        User=User3;
        isAuthenticated=true;
        User3={};
        return User;
    }
   } 
  

  var isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(User.Role) !== -1);
  };


  function destroyUserCredentials() {
    authToken = undefined;
    User={};
    isAuthenticated = false;
    localStorage.removeItem('UserSession');
  }

  var logout = function() {
    destroyUserCredentials();
  };


  return {
    UserSession:UserSession,
    logout: logout,
    isAuthorized: isAuthorized,
    isAuthenticated: function() {return isAuthenticated;},
    LoadUserSession:function() {return LoadUserSession();},
    GetUser: function() {return User;},
    username: function() {return  User.Username;},
    role: function() {return User.Role;}
  };
})
//---------------------------------------------------

.factory('AuthInterceptor', function ($rootScope, $q) {
  return {
    responseError: function (response) {
      $rootScope.$broadcast({
        401: 'Login0',
        403: 'Redzone'
      }[response.status], response);
      return $q.reject(response);
    }
  };
})

.config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
})



.factory('Web', function ($http, $ionicPopup,AuthService,$timeout) {
  var WebUser={};
  return {
    GetUser: function() {return WebUser;},
    WebUsers:function(){
    $.ajax({
        type: "GET",
        url: "https://www.shngroup.net/api/Users/GetUsers",
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (msg) {console.log(msg);alert(msg);
        }
    });
    },



    WebLogin:function($scope,$state,Username2,Password2){
      var Login = {
        Username: Username2,
        Password: Password2
    };
    $.ajax({
        type: "POST",
        url: "https://www.shngroup.net/api/Users/Login",
        data: {'': JSON.stringify(Login)} ,
        dataType: "json",
        success: function (data) {
          $scope.User=data;
            var alertPopup = $ionicPopup.alert({
              title: 'Welcome - Login Success!',
              template: data.Username + " "+data.Password+" "+data.Mail+" "+data.Phone
            });
            WebUser=data;WebUser.isLogin=true;
            AuthService.UserSession(WebUser);
            $state.go('Main.System', {}, {reload: true});
        },
        error: function (msg) {console.log(msg);
          var alertPopup = $ionicPopup.alert({
            title: 'Login Failed!',
            template: 'Check Your Username or Password'
          });
        }
    });
    },



    WebCreate:function($scope,$state,Username,Password,Mail,Phone){
      var Create = {
        Username: Username,
        Password: Password,
        Mail: Mail,
        Phone: Phone,
    };
    $.ajax({
        type: "POST",
        url: "https://www.shngroup.net/api/Users/Create",
        data: {'': JSON.stringify(Create)} ,
        dataType: "json",
        success: function (data) {
            if(data.status==1)
            {
              var alertPopup = $ionicPopup.alert({
                title: 'Success!',
                template: 'You Can Login Now!'
              });
              $scope.LoginData.username=Username;
              $scope.LoginData.password=Password;
              $state.go('app.Login', {}, {reload: true});
              $timeout(function(){ location.reload();}, 1500);
              
            }
            else{
              var alertPopup = $ionicPopup.alert({
                title: 'Error',
                template: 'Create Failed!'
              });

            }
        },
        error: function (msg) {console.log(msg);alert("Başarısız");alert(msg);
        }
    });
    }


    
  }
});