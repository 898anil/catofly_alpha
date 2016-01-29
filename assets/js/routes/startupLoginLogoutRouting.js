/**
 * Created by jellyglass on 28/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/signup', {
            templateUrl: 'startup_signup.html',
            controller: 'startupSignupController'
        })
        .when('/signin', {
            templateUrl: 'startup_login.html',
            controller: 'startupLoginController'
        })
        .when('/', {
            templateUrl: 'startup_login.html',
            controller: 'startupLoginController'
        })
        .otherwise({
            redirectTo:'/'
        })

}])