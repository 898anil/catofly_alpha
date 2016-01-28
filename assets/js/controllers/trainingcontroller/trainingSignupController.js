app.controller('trainingSignupController',['$kinvey','$scope',function($kinvey,$scope){
    $scope.signup = function($event){
        $event.preventDefault();
        console.log($scope.traininginstitute);


        console.log('institute signed up');
        var signup = $kinvey.User.signup({
            username  : $scope.institute.username,
            password: $scope.institute.password });

            signup.then(function(user) {
            console.log(user._id);
            console.log('user created');
            var trainingsignupId = user._id;
            var trainingDatalist = $scope.institute;
            trainingDatalist._id = trainingsignupId;
            console.log(trainingDatalist);
                location.href="Training-dashboard.html";



                var trainingSave = $kinvey.DataStore.save('trainingInstitutelist', trainingDatalist);
            trainingSave.then(function (model) {
                console.log(model._id)
            }, function (err) {
                console.log(err);
            });
        //}
            //cns
        }, function(err) {
            console.log(err);
            if(err.name == "UserAlreadyExists") {
                alert('institute already exists')
            }

        });

    }
}])