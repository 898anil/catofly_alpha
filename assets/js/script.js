var app = angular.module('catofly',['kinvey']);
var initpromise;
app.run(['$kinvey',function($kinvey){
    initpromise = $kinvey.init({
        appKey    : 'kid_-1BQ6Fwa3l',
            appSecret : '6f53464a60a54ee789fa20a27b424c74'
    })
}])
//initpromise.then(function(){
//    console.log('connected to kinvey');
//})
app.controller('loginController',['$kinvey','$scope',function($kinvey,$scope){
    console.log('contoller initialised');
}])