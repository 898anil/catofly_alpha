
app.controller('logoutController',['$scope','$kinvey',function($scope,$kinvey){
    initpromise.then(function(){
        $scope.logout = function() {
            var logout = $kinvey.User.logout();
            logout.then(function () {
                //location.href = "student_account.html";
            })
        }
    })
}])