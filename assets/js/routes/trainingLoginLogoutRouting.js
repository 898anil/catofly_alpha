/**
 * Created by jellyglass on 28/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/signup', {
            templateUrl: 'training_signup.html',
            controller: 'trainingSignupController'
        })
        .when('/signin', {
            templateUrl: 'training_login.html',
            controller: 'trainingLoginController'
        })

        .otherwise({
            redirectTo:'/'
        })

}])