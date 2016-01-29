
app.controller('startupProfileSummaryController',['$kinvey','$scope','$rootScope',function($kinvey,$scope,$rootScope){
    initpromise.then(function(){
        if($kinvey.getActiveUser()==null) {
            location.href = "startup_account.html";
         }
        else
        {
            var _id = $kinvey.getActiveUser()._id;
        }
        console.log(_id);
        var userdata = $kinvey.DataStore.get('startuplist',_id);
        console.log('data requested');
        userdata.then(function(startupData){
            $scope.startup = startupData;
            console.log(startupData)
        },function(err){
            console.log(err);
        })
    })
}])