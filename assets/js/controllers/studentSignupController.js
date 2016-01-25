/**
 * Created by jellyglass on 25/1/16.
 */
app.controller('studentSignupController',['$kinvey','$scope',function($kinvey,$scope){
    console.log('studentsignup1235462');
    $scope.signup = function($event){
        $event.preventDefault();
        console.log($scope.student)
        console.log('student signed up');
        var promise = $kinvey.User.signup(
            $scope.student
        );
        promise.then(function(user) {
            console.log(user);
            console.log('user created');
        }, function(err) {
            console.log(err);
        });
    }
}])