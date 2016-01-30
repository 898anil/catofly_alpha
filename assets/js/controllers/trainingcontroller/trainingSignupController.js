app.controller('TrainingSignupController',['$kinvey','$scope',function($kinvey,$scope){
    $scope.signup = function($event){
        $event.preventDefault();
        console.log('institute signed up');
        console.log($scope.institute.username + " : " + $scope.institute.password)
        var signup = $kinvey.User.signup({
            username  : $scope.institute.username,
            password: $scope.institute.password,
            type:"institute"
        });

        signup.then(function(user) {
            console.log(user._id);
            console.log('user created');
            var trainingsignupId = user._id;
            var trainingDatalist = $scope.institute;
            trainingDatalist._id = trainingsignupId;
            console.log(trainingDatalist);

                var trainingSave = $kinvey.DataStore.save('trainingInstitutelist', trainingDatalist);
            trainingSave.then(function (model) {
                console.log(model._id);
                location.href="Training-dashboard.html";
            }, function (err) {
                console.log(err);
            });
        }, function(err) {
            console.log(err);
            if(err.name == "UserAlreadyExists") {
                alert('institute already exists')
            }

        });

    }
}])