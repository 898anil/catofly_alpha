/**
 * Created by jellyglass on 28/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/signup', {
            templateUrl: 'Startup_signup.html',
            controller: 'startupSignupController'
        })
        .when('/signin', {
            templateUrl: 'Startup_login.html',
            controller: 'startupLoginController'
        })
        .when('/', {
            templateUrl: 'Startup_login.html',
            controller: 'startupLoginController'
        })
        .otherwise({
            redirectTo:'/'
        })

}])