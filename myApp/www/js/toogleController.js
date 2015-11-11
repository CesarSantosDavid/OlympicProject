angular.module('starter.toogle', [])

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
});