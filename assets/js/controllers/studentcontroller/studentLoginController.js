app.controller('studentLoginController',['$kinvey','$scope',function($kinvey,$scope){
    initpromise.then(
        function(){
            if($kinvey.getActiveUser() !== null)
            {
                location.href="Student-dashboard.html";
            }
        }
    )
        $scope.studentLogin = function ($event) {
            $event.preventDefault();
            console.log('form submitted');
            console.log($scope.student);
            $scope.loginStatus = 'Loging In';
            var login = Kinvey.User.login($scope.student.username, $scope.student.password);
            login.then(function (user) {
                console.log('user logged in' + user._id);
                location.href = "Student-dashboard.html";
            }, function (err) {
                console.log('error occured');
                $scope.loginError = "err.message";
                $scope.loginStatus = 'Login';
            })

        }
}]);
//dsfsdf