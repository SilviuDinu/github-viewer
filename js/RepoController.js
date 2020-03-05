(function () {

    var app = angular.module('githubViewer');

    app.controller('RepoController', function ($scope, $location, $log, $routeParams, github) {

        github.getRequestsLeft()
            .then(function (data) {
                $scope.requestsLeft = data;
            });

        $scope.username = $routeParams.username;
        $scope.repo = $routeParams.repo;


    });


}());