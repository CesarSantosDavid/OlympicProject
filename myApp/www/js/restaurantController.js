angular.module('starter.restaurant', [])

.controller('MapControllerRestaurant', function($scope, $ionicLoading) {

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
                types: ['Restaurant']
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
                title: "My Location",
                icon: myIcon
            });
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });

        $scope.map = map;
      };



});