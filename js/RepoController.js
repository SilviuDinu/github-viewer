(function () {

    var app = angular.module('githubViewer');

    app.controller('RepoController', function ($scope, $location, $log, $routeParams, github) {
        
        github.getRequestsLeft()
            .then(function (data) {
                $scope.requestsLeft = data;
            });

        $scope.username = $routeParams.username;
        $scope.repo = $routeParams.repo;

        github.getRepoDetails($scope.username, $scope.repo)
            .then(function (data) {
                $scope.repoDetails = data;
            });

        github.getIssues($scope.username, $scope.repo)
            .then(function (data) {
                $scope.issues = data;
            });

        github.getContributors($scope.username, $scope.repo)
            .then(function (data) {
                $scope.contributors = data;
            });
        
        if($scope.contributors){
            $scope.searching = false;
        }

    });


}());