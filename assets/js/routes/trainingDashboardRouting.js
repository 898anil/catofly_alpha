/**
 * Created by jellyglass on 27/1/16.
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'InstituteProfile.html',
        controller: 'InstituteProfileController'
    })
        .when('/instituteprofile', {
            templateUrl: 'InstituteProfile.html',
            controller: 'InstituteProfileController'
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
            templateUrl: 'MaterialManagement.html',
            controller: 'MaterialManagementController'
        })
}]);