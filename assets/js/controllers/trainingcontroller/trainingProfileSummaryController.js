/**
 * Created by jellyglass on 27/1/16.
 */
app.controller('trainingProfileSummaryController',['$kinvey','$scope','$rootScope',function($kinvey,$scope,$rootScope){
    initpromise.then(function(){
        if($kinvey.getActiveUser()==null) {
            location.href = "student_account.html";
         }
        else
        {
            var _id = $kinvey.getActiveUser()._id;
        }
        console.log(_id);
        var userdata = $kinvey.DataStore.get('trainingInstitutelist',_id);
        console.log('data requested');
        userdata.then(function(insituteData){
            $scope.institute = insituteData;
            console.log(insituteData)
        },function(err){
            console.log(err);
        })
    })
}])