/**
 * Created by jellyglass on 27/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: 'projects.html',
        controller: 'startupProjectsController'
    })
        .when('/', {
        templateUrl: 'profile.html',
        controller: 'startupProfileController'
    })
        .when('/profile', {
            templateUrl: 'profile.html',
            controller: 'startupProfileController'
        })
        .when('/exercises',{
            templateUrl: 'exercises.html',
            controller: 'startupExercisesController'
        })
        .when('/quiz',{
            templateUrl: 'quiz.html',
            controller: 'startupQuizController'
        })
        .when('/materials',{
            templateUrl: 'material.html',
            controller: 'startupMaterialController'
        })
}])