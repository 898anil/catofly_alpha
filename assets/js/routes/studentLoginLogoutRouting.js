/**
 * Created by jellyglass on 28/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/signup', {
            templateUrl: 'studentSignup.html',
            controller: 'studentSignupController'
        })
        .when('/signin', {
            templateUrl: 'studentLogin.html',
            controller: 'studentLoginController'
        })
        .when('/', {
            templateUrl: 'studentLogin.html',
            controller: 'studentLoginController'
        })
        .otherwise({
            redirectTo:'/'
        })

}])