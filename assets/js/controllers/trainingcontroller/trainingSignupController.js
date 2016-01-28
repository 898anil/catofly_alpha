var studentsignupId ;
app.controller('trainingSignupController',['$kinvey','$scope',function($kinvey,$scope){
    console.log('instiutesignedup');
    $scope.signup = function($event){
        $event.preventDefault();
        console.log($scope.traininginstitute);


        console.log('institute signed up');
        var signup = $kinvey.User.signup({

            username  : $scope.traininginstiute.username,
            password: $scope.traininginstiute.password });
        signup.then(function(user) {
            console.log(user.name)
            //location.href = "../student/Student-dashboard.html";

            console.log(user._id);
            console.log('user created');
            trainingsignupId = user._id;
            var trainingDatalist = {};
            trainingDatalist = $scope.training;
            trainingDatalist._id = trainingsignupId
            console.log(trainingDatalist)

            var trainingDatalist = $kinvey.DataStore.save('trainingInstitutelist', trainingDatalist);
            trainingDatalist.then(function (model) {
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