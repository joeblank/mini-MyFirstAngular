angular.module('friendsList')
.controller('mainCtrl', function($scope) {
  $scope.friends = ['Nate', 'Jason', 'Keith', 'Spencer', 'Bryson'];
  $scope.addFriend = function() {
  $scope.friends.push($scope.input);
  };

})
