app.controller('studentLoginController',['$kinvey','$scope',function($kinvey,$scope){
    $scope.studentLogin = function($event){
        $event.preventDefault();
        console.log('form submitted');
        console.log($scope.student);
        var login = $kinvey.User.login({username:$scope.student.username,password:$scope.student.password});
        login.then(function(user){
            console.log('user logged in' + user._id);
            location.href="catofly-dashboard2.html";
        },function(err){
            console.log('error occured');
            $scope.loginError = "Incorrect username or password";

        })

    }
    $scope.studentlogout = function(){
        var logout = Kinvey.User.logout();
        logout.then(function(){
            console.log('student logged out');
        },
        function(){
            console.log('error occured');
        })
    }
    initpromise.then(function(){
        $scope.userloggedin = Kinvey.getActiveUser();
    })

}]);
//dsfsdf