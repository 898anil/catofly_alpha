/**
 * Created by jellyglass on 27/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: 'student/projects.html',
        controller: 'studentProjectsController'
    })
        .when('/', {
        templateUrl: 'student/profile.html',
        controller: 'studentProfileController'
    })
        .when('/profile', {
            templateUrl: 'student/profile.html',
            controller: 'studentProfileController'
        })
        .when('/exercises',{
            templateUrl: 'student/exercises.html',
            controller: 'studentExercisesController'
        })
        .when('/quiz',{
            templateUrl: 'student/quiz.html',
            controller: 'studentQuizController'
        })
        .when('/materials',{
            templateUrl: 'student/material.html',
            controller: 'studentMaterialController'
        })
}])