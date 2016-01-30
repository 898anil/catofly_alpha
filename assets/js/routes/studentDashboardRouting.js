/**
 * Created by jellyglass on 27/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: 'StudentManagement.html',
        controller: 'studentProjectsController'
    })
        .when('/', {
        templateUrl: 'profile.html',
        controller: 'studentProfileController'
    })
        .when('/profile', {
            templateUrl: 'profile.html',
            controller: 'studentProfileController'
        })
        .when('/exercises',{
            templateUrl: 'CourseManagement.html',
            controller: 'studentExercisesController'
        })
        .when('/quiz',{
            templateUrl: 'StartupManagement.html',
            controller: 'studentQuizController'
        })
        .when('/materials',{
            templateUrl: 'materialManagement.html',
            controller: 'studentMaterialController'
        })
}])