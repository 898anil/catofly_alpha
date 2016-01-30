
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/signup', {
            templateUrl: 'Startup_signup.html',
            controller: 'StartupSignupController'
        })
        .when('/signin', {
            templateUrl: 'Startup_login.html',
            controller: 'StartupLoginController'
        })
        .when('/', {
            templateUrl: 'Startup_login.html',
            controller: 'StartupLoginController'
        })
        .otherwise({
            redirectTo:'/'
        })

}]);