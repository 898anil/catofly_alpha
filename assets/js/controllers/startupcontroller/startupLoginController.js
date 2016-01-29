app.controller('startupLoginController',['$kinvey','$scope',function($kinvey,$scope){
    initpromise.then(
        function(){
            if($kinvey.getActiveUser() !== null)
            {
                location.href="Startup-dashboard.html";
            }
        }
    )
    $scope.startupLogin = function ($event) {
        $event.preventDefault();
        console.log('form submitted');
        console.log($scope.startup);
        $scope.loginStatus = 'Loging In';
        var login = Kinvey.User.login($scope.startup.username, $scope.startup.password);
        login.then(function (user) {
            if(user.type == "startup") {
                console.log('user logged in' + user._id);
                location.href = "Startup-dashboard.html";
            }
            else
            {
                $kinvey.User.logout({force:true});
                $scope.loginStatus = 'Login';
                $scope.loginError = "Invalid Credentials";
            }
        }, function (err) {
            console.log(err)
            console.log('error occured');
            $scope.loginError = err.message;
            $scope.loginStatus = 'Login';
        })//dfh

    }
}]);