/**
 * Created by jellyglass on 28/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/signup', {
            templateUrl: 'Training_signup.html',
            controller: 'TrainingSignupController'
        })
        .when('/signin', {
            templateUrl: 'Training_login.html',
            controller: 'TrainingLoginController'
        })
        .when('/', {
            templateUrl: 'Training_login.html',
            controller: 'TrainingLoginController'
        })
        .otherwise({
            redirectTo:'/'
        })

}])