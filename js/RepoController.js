(function () {

    var app = angular.module('githubViewer');

    app.controller('RepoController', function ($scope, $location, $log, $routeParams, github) {
        
        github.getRequestsLeft()
            .then(function (data, onError) {
                $scope.requestsLeft = data;
            });

        $scope.username = $routeParams.username;
        $scope.repo = $routeParams.repo;

        github.getRepoDetails($scope.username, $scope.repo)
            .then(function (data, onError) {
                $scope.repoDetails = data;
            });

        github.getIssues($scope.username, $scope.repo)
            .then(function (data, onError) {
                $scope.issues = data;
            });

        github.getContributors($scope.username, $scope.repo)
            .then(function (data, onError) {
                $scope.contributors = data;
            });
        
        if($scope.contributors){
            $scope.searching = false;
        }

        var onError = function (reason) {
            $scope.error = "Couldn't fetch any data from the server.";
            if (!$scope.requestsLeft) {
              $scope.error += "\nNo requests left!";
            }
            return $scope.error
          }
      

    });


}());