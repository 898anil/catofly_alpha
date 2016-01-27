var app = angular.module('catofly',['kinvey','ngRoute']);
var initpromise;
app.run(['$kinvey',function($kinvey){
    initpromise = $kinvey.init({
        appKey    : 'kid_-1BQ6Fwa3l',
        appSecret : '6f53464a60a54ee789fa20a27b424c74'
    })
}])
