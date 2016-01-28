app.service('isLoggedIn',['$kinvey',function($kinvey){
    var obj = {};
    initpromise.then(function(){
        if($kinvey.getActiveUser() !== null)
        {

            obj.status = true;
        }
        else
        {

            obj.status = false;
        }
        console.log(obj);
        return obj;
    })

}])