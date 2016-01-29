
app.controller('studentDashboardController',["isLoggedIn",function(isLoggedIn){
    initpromise.then(function(){
        if(!Kinvey.getActiveUser())
        {
            location.href="student_account.html";
        };
    });
}]);