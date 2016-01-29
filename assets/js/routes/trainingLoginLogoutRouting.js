/**
 * Created by jellyglass on 28/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/signup', {
            templateUrl: 'startup_signup.html',
            controller: 'trainingSignupController'
        })
        .when('/signin', {
            templateUrl: 'startup_login.html',
            controller: 'trainingLoginController'
        })
        .when('/', {
            templateUrl: 'startup_login.html',
            controller: 'trainingLoginController'
        })
        .otherwise({
            redirectTo:'/'
        })

}])