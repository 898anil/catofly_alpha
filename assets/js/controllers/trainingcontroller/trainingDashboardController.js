/**
 * Created by jellyglass on 28/1/16.
 */
app.controller('trainingDashboardController',["isLoggedIn",function(isLoggedIn){
    initpromise.then(function(){
        if(!Kinvey.getActiveUser())
        {
            location.href="student_account.html";
        }
    })
}])