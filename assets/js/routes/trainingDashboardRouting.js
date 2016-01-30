/**
 * Created by jellyglass on 27/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: 'StudentManagement.html',
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
        .when('/courseManagement',{
            templateUrl: 'CourseManagement.html',
            controller: 'CourseManagementController'
        })
        .when('/studentManagement',{
            templateUrl: 'StudentManagement.html',
            controller: 'StudentManagementController'
        })
        .when('/startupManagement',{
            templateUrl: 'StartupManagement.html',
            controller: 'StartupManagementController'
        })
        .when('/materialManagement',{
            templateUrl: 'materialManagement.html',
            controller: 'MaterialManagementController'
        })
}]);