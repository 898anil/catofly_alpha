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
                if(user.type == 'student') {
                    console.log('user logged in' + user._id);
                    location.href = "Student-dashboard.html";
                }
                else
                {
                    $kinvey.User.logout({force:true});
                    $scope.loginStatus = 'Login';
                    $scope.loginError = "Invalid Credentials";
                }
            }, function (err) {
                console.log('error occured');
                $scope.loginError = err.message;
                $scope.loginStatus = 'Login';
            })

        }
}]);
//dsfsdf