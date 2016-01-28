/**
 * Created by jellyglass on 27/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: 'projects.html',
        controller: 'trainingProjectsController'
    })
        .when('/', {
        templateUrl: 'profile.html',
        controller: 'trainingProfileController'
    })
        .when('/profile', {
            templateUrl: 'profile.html',
            controller: 'trainingProfileController'
        })
        .when('/exercises',{
            templateUrl: 'exercises.html',
            controller: 'trainingExercisesController'
        })
        .when('/quiz',{
            templateUrl: 'quiz.html',
            controller: 'trainingQuizController'
        })
        .when('/materials',{
            templateUrl: 'material.html',
            controller: 'trainingMaterialController'
        })
}])