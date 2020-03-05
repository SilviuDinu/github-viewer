(function () {

    var github = function ($http, $log) {

        var getUser = function (username) {

            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });

        };

        var getRepos = function (user) {

            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                });

        };

        var getRequestsLeft = function () {

            return $http.get("https://api.github.com/rate_limit")
                .then(function (response) {
                    return response.data;
                });

        };

        var getRepoDetails = function (username, repo) {

            return $http.get("https://api.github.com/repos/" + username + "/" + repo)
                .then(function (response) {
                    return response.data;
                });

        };

        var getIssues = function (username, repo) {

            return $http.get("https://api.github.com/repos/" + username + "/" + repo + "/issues")
                .then(function (response) {
                    return response.data;
                });

        };

        var getContributors = function (username, repo) {

            return $http.get("https://api.github.com/repos/" + username + "/" + repo + "/contributors")
                .then(function (response) {
                    return response.data;
                });

        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails,
            getIssues: getIssues,
            getContributors: getContributors,
            getRequestsLeft: getRequestsLeft
        };
    };

    var module = angular.module("githubViewer");

    module.factory("github", github);

}());