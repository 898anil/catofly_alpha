app.controller('trainingLoginController',['$kinvey','$scope',function($kinvey,$scope){
    initpromise.then(
        function(){
            if($kinvey.getActiveUser() !== null)
            {
                location.href="Training-dashboard.html";
            }
        }
    )
    $scope.trainingLogin = function ($event) {
        $event.preventDefault();
        console.log('form submitted');
        console.log($scope.institute);
        $scope.loginStatus = 'Loging In';
        var login = Kinvey.User.login($scope.institute.username, $scope.institute.password);
        login.then(function (user) {
            if(user.type == "institute") {
                console.log('user logged in' + user._id);
                location.href = "Training-dashboard.html";
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
        })//df

    }
}]);