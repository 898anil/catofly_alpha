/**
 * Created by jellyglass on 28/1/16.
 */
app.controller('startupDashboardController',["isLoggedIn",function(isLoggedIn){
    initpromise.then(function(){
        if(!Kinvey.getActiveUser())
        {
            location.href="startup_account.html";
        }
    })
}])