/**
 * Created by jellyglass on 27/1/16.
 */
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