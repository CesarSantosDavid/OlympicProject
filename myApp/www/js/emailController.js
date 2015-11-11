angular.module('starter.mails', [])

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
          { id: 0, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 1, subject: 'Restaurante', date: '0', from: 'John McDonald' },
          { id: 2, subject: 'Restaurante', date: '0', from: 'Jean Michel' },
          { id: 3, subject: 'Restaurante', date: '0', from: 'Louise Henri' },
          { id: 4, subject: 'Restaurante', date: '0', from: 'John McDonald' },
          { id: 5, subject: 'Balada', date: '0', from: 'Rolanda Pires' },
          { id: 6, subject: 'Restaurante', date: '0', from: 'Peter schumaker' },
          { id: 7, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 8, subject: 'Bar', date: '0', from: 'Rolanda Pires' },
          { id: 9, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 10, subject: 'Restaurante', date: '0', from: 'Miguel Torres' },
          { id: 11, subject: 'Restaurante', date: '0', from: 'Jacky Puis' },
          { id: 12, subject: 'Restaurante', date: '0', from: 'Michel Biensur' },
          { id: 13, subject: 'Restaurante', date: '0', from: 'Miguel Torres' },
          { id: 14, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 15, subject: 'Restaurante', date: '0', from: 'Peter schumaker' },
          { id: 16, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 17, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 18, subject: 'Restaurante', date: '0', from: 'Miguel Torres' },
          { id: 19, subject: 'Restaurante', date: '0', from: 'Peter schumaker' },
          { id: 20, subject: 'Restaurante', date: '0', from: 'Miguel Torres' },
          { id: 21, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 22, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 23, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 24, subject: 'Restaurante', date: '1', from: 'Peter schumaker' },
          { id: 25, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 26, subject: 'Restaurante', date: '0', from: 'Miguel Torres' },
          { id: 27, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 28, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 29, subject: 'Bar', date: '0', from: 'Rolanda Pires' },
          { id: 30, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 31, subject: 'Restaurante', date: '0', from: 'Peter schumaker' },
          { id: 32, subject: 'Restaurante', date: '0', from: 'Louise Henri' },
          { id: 33, subject: 'Restaurante', date: '0', from: 'Miguel Torres' },
          { id: 34, subject: 'Restaurante', date: '1', from: 'Rolanda Pires' },
          { id: 35, subject: 'Restaurante', date: '0', from: 'Miguel Torres' },
          { id: 36, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 37, subject: 'Restaurante', date: '1', from: 'Rolanda Pires' },
          { id: 38, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 39, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 40, subject: 'Restaurante', date: '0', from: 'Miguel Torres' },
          { id: 41, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 42, subject: 'Restaurante', date: '0', from: 'Louise Henri' },
          { id: 43, subject: 'Restaurante', date: '0', from: 'Miguel Torres' },
          { id: 44, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 45, subject: 'Restaurante', date: '0', from: 'Jean Michel' },
          { id: 46, subject: 'Balada', date: '0', from: 'Rolanda Pires' },
          { id: 47, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 48, subject: 'Restaurante', date: '0', from: 'Miguel Torres' },
          { id: 49, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' },
          { id: 50, subject: 'Restaurante', date: '0', from: 'Rolanda Pires' }
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