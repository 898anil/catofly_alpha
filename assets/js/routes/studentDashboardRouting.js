/**
 * Created by jellyglass on 27/1/16.
 */
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/projects',{
        templateUrl:'student/projects.html',
        controller:'studentProjectsController'
    })
}])