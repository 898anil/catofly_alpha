app.controller('studentLoginController',['$kinvey','$scope',function($kinvey,$scope){
    initpromise.then(
        function(){
            if($kinvey.getActiveUser() !== null)
            {
                location.href="catofly-dashboard2.html";
            }
        }
    )
        $scope.studentLogin = function ($event) {
            $event.preventDefault();
            console.log('form submitted');
            console.log($scope.student);
            var login = Kinvey.User.login($scope.student.username, $scope.student.password);
            login.then(function (user) {
                console.log('user logged in' + user._id);
                location.href = "catofly-dashboard2.html";
            }, function (err) {
                console.log('error occured');
                $scope.loginError = "err.message";

            })

        }
        $scope.studentlogout = function () {
            var logout = Kinvey.User.logout();
            logout.then(function () {
                    console.log('student logged out');
                },
                function () {
                    console.log('error occured');
                })
        }
        initpromise.then(function () {
            $scope.userloggedin = Kinvey.getActiveUser();
        })
}]);
//dsfsdf