
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'StartupProfile.html',
        controller: 'StartupProfileController'
    })
        .when('/startupProfile', {
            templateUrl: 'StartupProfile.html',
            controller: 'StartupProfileController'
        })
        .when('/jobManagement',{
            templateUrl: 'JobManagement.html',
            controller: 'JobManagementController'
        })
        .when('/hackathon',{
            templateUrl: 'Hackathon.html',
            controller: 'HackathonController'
        })
        .when('/materialManagement',{
            templateUrl: 'MaterialManagement.html',
            controller: 'MaterialManagementController'
        })
}])