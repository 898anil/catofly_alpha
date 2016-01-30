/**
 * Created by jellyglass on 27/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: 'StudentManagement.html',
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
            templateUrl: 'CourseManagement.html',
            controller: 'startupExercisesController'
        })
        .when('/quiz',{
            templateUrl: 'StartupManagement.html',
            controller: 'startupQuizController'
        })
        .when('/materials',{
            templateUrl: 'materialManagement.html',
            controller: 'startupMaterialController'
        })
}])