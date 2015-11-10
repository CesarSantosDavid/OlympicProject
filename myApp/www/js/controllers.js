angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/mesageSend.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });



  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('Agenda', function($scope) {
  $scope.events = [
    { "title":"Meetup on Ionic",
      "description":"We'll talk about beer, not Ionic.",
      "date":"11/12/2015" 
    },
    {
      "title":"Meetup on Beer",
      "description":"We'll talk about Ionic, not Beer.",
      "date":"11/12/2015"
    },
    {
      "title":"Ray's Birthday Bash",
      "description":"Celebrate the awesomeness of Ray",
      "date":"11/12/2015"
    },
    {
      "title":"Code Review",
      "description":"Let's tear apart Ray's code.",
      "date":"11/12/2015"
    } 
  ];
})

.controller('Toogle', function($scope) {
  $scope.toogleModel = {
     olympicos : true,
     puntosTuristicos : true,
     bars : true,
     restaurantes : true,
     clubs : true,
     mesagems : true,
     agendamento : true,
     transport : true
   };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('MapController', function($scope, $ionicLoading) {

    $scope.init = function() {
      ionic.Platform.ready(function() {
        var myLatlng = new google.maps.LatLng(-22.911986, -43.229974);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var myIcon = "http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png"
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location",
                icon: myIcon
            });

            var service = new google.maps.places.PlacesService(map);
              service.nearbySearch({
                location: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                radius: 1000,
                types: ['bar']
              }, callback);
        });

        infowindow = new google.maps.InfoWindow();

        

        function callback(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
          }
        }

        function createMarker(place) {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });

          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
          });
        }
 
        $scope.map = map;
    });

    }



    $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        var map = $scope.map;

        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });

        $scope.map = map;
      };



})

.controller('emailsCtrl', function($scope, emailService) {
  
  $scope.data = {
    showDelete: false
  };
  
  $scope.onItemDelete = function(email) {
    $scope.emails.splice($scope.emails.indexOf(email), 1);
  };
  
  $scope.emails = emailService.getEmails();
  
})

.factory('emailService', function() {
  var emails = [];

  return {
    getEmails: function(){

        emails = [
          { id: 0, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 1, subject: 'Test subj #2', date: '0', from: 'John' },
          { id: 2, subject: 'Test subj #3', date: '0', from: 'dd John Doe' },
          { id: 3, subject: 'Test subj #4', date: '0', from: 'Doe' },
          { id: 4, subject: 'Test subj #1', date: '0', from: 'John' },
          { id: 5, subject: 'dfhdsfhsdfhsdf', date: '0', from: 'John Doe' },
          { id: 6, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 7, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 8, subject: 'dhfsdf dfhdasfhsdf', date: '0', from: 'John Doe' },
          { id: 9, subject: 'Test subj #11', date: '0', from: 'John Doe' },
          { id: 10, subject: 'Test subj #21', date: '0', from: 'John Doe' },
          { id: 11, subject: 'Test subj #31', date: '0', from: 'John Doe' },
          { id: 12, subject: 'Test subj #41', date: '0', from: 'John Doe' },
          { id: 13, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 14, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 15, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 16, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 17, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 18, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 19, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 20, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 21, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 22, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 23, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 24, subject: 'Test subj #1', date: '1', from: 'John Doe' },
          { id: 25, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 26, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 27, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 28, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 29, subject: 'dfhsdfhsdf dfshsd', date: '0', from: 'John Doe' },
          { id: 30, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 31, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 32, subject: 'Test subj #1', date: '0', from: 'ooo Doe' },
          { id: 33, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 34, subject: 'Test subj #1', date: '1', from: 'John Doe' },
          { id: 35, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 36, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 37, subject: 'Test subj #1', date: '1', from: 'John Doe' },
          { id: 38, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 39, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 40, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 41, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 42, subject: 'Test subj #1', date: '0', from: 'ooo Doe' },
          { id: 43, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 44, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 45, subject: 'Test subj #1', date: '0', from: 'aaa Doe' },
          { id: 46, subject: 'dfghsdfh fdhgs dfh', date: '0', from: 'John Doe' },
          { id: 47, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 48, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 49, subject: 'Test subj #1', date: '0', from: 'John Doe' },
          { id: 50, subject: 'Test subj last', date: '0', from: 'John Doe' }
        ];      
      
        return emails;
    },
    getEmail: function(id){
      for(i=0;i<emails.length;i++){
        if(emails[i].id == id){
          return emails[i];
        }
      }
      return null;
    }
  }
});


