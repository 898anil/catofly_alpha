app.controller('trainingLoginController',['$kinvey','$scope',function($kinvey,$scope){
    //initpromise.then(
    //    function(){
    //        if($kinvey.getActiveUser() !== null)
    //        {
    //            location.href="training-dashboard.html";
    //        }
    //    }
    //)
    $scope.trainingLogin = function ($event) {
        $event.preventDefault();
        console.log('form submitted');
        console.log($scope.traininginstitute);
        $scope.loginStatus = 'Loging In';
        var login = Kinvey.User.login($scope.traininginstitute.username, $scope.traininginstitute.password);
        login.then(function (user) {
            console.log('user logged in' + user._id);
            location.href = "training-dashboard.html";
        }, function (err) {
            console.log('error occured');
            $scope.loginError = "err.message";
            $scope.loginStatus = 'Login';
        })

    }
}]);
//dsfsdf