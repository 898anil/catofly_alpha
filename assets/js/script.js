var app = angular.module('catofly',['kinvey']);
var initpromise;
app.run(['$kinvey',function($kinvey){
    initpromise = $kinvey.init({
        appKey    : 'kid_-1BQ6Fwa3l',
            appSecret : '6f53464a60a54ee789fa20a27b424c74'
    })
}])

app.controller('studentLoginController',['$kinvey','$scope',function($kinvey,$scope){
    $scope.studentLogin = function($event){
        $event.preventDefault();
        console.log('form submitted');
        console.log($scope.student);
        var login = $kinvey.User.login($scope.student);
        login.then(function(user){
            console.log('user logged in' + user._id);
        },function(err){
            console.log(err.message);
            $scope.loginError = "Incorrect username or password";
        })
    }
}]);
app.controller('studentsignupController',['$kinvey','$scope',function($kinvey,$scope){
    console.log('studentsignup') }])


