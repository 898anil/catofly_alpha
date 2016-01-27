app.service('ctLogout',['$kinvey',function($kinvey){
    console.log('service initialised');
    this.logout = $kinvey.User.logout;
}])