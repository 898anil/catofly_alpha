/**
 * Created by jellyglass on 27/1/16.
 */
app.controller('trainingProfileSummaryController',['$kinvey','$scope','$rootScope',function($kinvey,$scope,$rootScope){
    initpromise.then(function(){
        if($kinvey.getActiveUser()==null) {
            location.href = "training_account.html";
         }
        else
        {
            var _id = $kinvey.getActiveUser()._id;
        }

        var userdata = $kinvey.DataStore.get('trainingInstitutelist',_id);

        userdata.then(function(userData){
            $scope.traininginstitute = userData;

            console.log(userData)
            //$rootScope.preLoader = true;
        })
    })
}])