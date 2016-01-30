
app.controller('studentQuizController',['$kinvey','$scope',function($kinvey,$scope){
    console.log('working');
    $scope.heading = " Quiz";
    $scope.date = Date();
}])