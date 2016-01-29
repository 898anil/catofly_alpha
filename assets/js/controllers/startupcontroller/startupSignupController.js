app.controller('startupSignupController',['$kinvey','$scope',function($kinvey,$scope){
    $scope.signup = function($event){
        $event.preventDefault();
        console.log('startup signed up');
        console.log($scope.startup.username + " : " + $scope.startup.password)
        var signup = $kinvey.User.signup({
            username  : $scope.startup.username,
            password: $scope.startup.password,
            type:"startup"
        });

        signup.then(function(user) {
            console.log(user._id);
            console.log('startup created');
            startupDatalist._id = user._id;
                var startupSave = $kinvey.DataStore.save('startuplist', startupDatalist);
            startupSave.then(function (model) {
                console.log(model._id);
                location.href="Startup-dashboard.html";
            }, function (err) {
                console.log(err);
            });
        }, function(err) {
            console.log(err);
            if(err.name == "UserAlreadyExists") {
                alert('startup already exists')
            }
        });
    }
}])