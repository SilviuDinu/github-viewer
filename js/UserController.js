(function () {

  var app = angular.module('githubViewer');

  app.controller('UserController', function ($scope, github, $routeParams, $location) {

    $scope.searching = true;

    var onUserComplete = function (data) {
      $scope.user = data;
      $scope.user.identifier = $scope.user.name ? $scope.user.name : $scope.user.login;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function (data) {
      $scope.repos = data;
      $scope.check = true;
      github.getRequestsLeft()
        .then(function (data) {
          $scope.requestsLeft = data;
        });
      if (!$scope.repos || $scope.repos.length === 0) {
        $scope.check = false;
      }
      $scope.searching = false;
    }

    var onError = function (reason) {
      $scope.error = "Couldn't fetch any data from the server.";
      if (!$scope.requestsLeft) {
        $scope.error += "\nNo requests left!";
      }
      return $scope.error
    }

    $scope.username = $routeParams.username;
    if ($scope.username) {
      github.getUser($scope.username).then(onUserComplete, onError);
    } else {
      $scope.user = '';
    }

    $scope.search = function (username, repo) {
      $location.path("/user/" + username + "/" + repo);
    }

  });


}());