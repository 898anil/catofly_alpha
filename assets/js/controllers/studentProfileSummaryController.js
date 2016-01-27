/**
 * Created by jellyglass on 27/1/16.
 */
app.controller('studentProfileSummaryController',['$kinvey','$scope',function($kinvey,$scope){
    initpromise.then(function(){
        if($kinvey.getActiveUser()==null) {
            location.href = "student_login.html";
         }
        else
        {
            var _id = $kinvey.getActiveUser()._id;
        }

        var userdata = $kinvey.DataStore.get('studentUserlist',_id);
        userdata.then(function(userData){
            $scope.user = userData;
        })
    })
}])