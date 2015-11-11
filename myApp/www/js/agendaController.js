angular.module('starter.agenda', [])

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
});