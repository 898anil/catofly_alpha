var studentsignupId ;
app.controller('studentSignupController',['$kinvey','$scope',function($kinvey,$scope){
    console.log('studentsignedup');
    $scope.signup = function($event){
        $event.preventDefault();
        console.log($scope.student);


        console.log('student signed up');
        var signup = $kinvey.User.signup({

            username  : $scope.student.username,
            password: $scope.student.password });
        signup.then(function(user) {
            console.log(user.name)
            location.href = "Student-dashboard.html";

            console.log(user._id);
            console.log('user created');
            studentsignupId = user._id;
            var studentDatalist = {};
            studentDatalist = $scope.student;
            studentDatalist._id = studentsignupId
            console.log(studentDatalist)

            var studentsave = $kinvey.DataStore.save('studentUserlist', studentDatalist);
            studentsave.then(function (model) {
                console.log(model._id)
            }, function (err) {
                console.log(err);
            });
        //}
            //cns
        }, function(err) {
            console.log(err);
            if(err.name == "UserAlreadyExists") {
                alert('user already exists')
            }

        });

    }
}])