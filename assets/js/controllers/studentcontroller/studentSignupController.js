app.controller('studentSignupController',['$kinvey','$scope',function($kinvey,$scope){
    console.log('studentsignup page ');
    $scope.signup = function($event){
        $event.preventDefault();
        console.log($scope.student);


        console.log('student signed up');
        var signup = $kinvey.User.signup({

            username  : $scope.student.username,
            password: $scope.student.password,
            type: 'student'
        });

        signup.then(function(user) {
            console.log(user.name)
            console.log(user._id);
            console.log('user created');

          var  studentDatalist = $scope.student;
            studentDatalist._id = user._id;
            console.log(studentDatalist);


            var studentsave = $kinvey.DataStore.save('studentUserlist', studentDatalist);
            studentsave.then(function (model) {
                console.log(model._id)
                location.href = "Student-dashboard.html";

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