(function () {

  var app = angular.module('githubViewer');

  app.controller('MainController', function ($scope, $location) {

    $scope.searching = false;

    $scope.search = function(username){
      if (username && username !== "") $scope.searching = true;
      else $scope.searching = false;

      $location.path("/user/" + username);
    }

  });

}());