
app.filter('undefinedFilter',[function(){
    return function(input,replacer){
        if(input == undefined)
        {
            return replacer;
        }
        else
        {
            return input;
        }
    }
}])