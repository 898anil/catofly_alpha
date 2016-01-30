/**
 * Created by jellyglass on 27/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: 'projects.html',
        controller: 'studentProjectsController'
    })
        .when('/', {
        templateUrl: 'Profile.html',
        controller: 'studentProfileController'
    })
        .when('/profile', {
            templateUrl: 'Profile.html',
            controller: 'studentProfileController'
        })
        .when('/exercises',{
            templateUrl: 'exercises.html',
            controller: 'studentExercisesController'
        })
        .when('/quiz',{
            templateUrl: 'quiz.html',
            controller: 'studentQuizController'
        })
        .when('/materials',{
            templateUrl: 'Material.html',
            controller: 'studentMaterialController'
        })
}])