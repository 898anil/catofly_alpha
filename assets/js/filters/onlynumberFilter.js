/**
 * Created by jellyglass on 28/1/16.
 */
app.filter('onlyNumber',function(){
    return function(input){
        if(isNaN(parseInt(input)))
        {
            return '';
        }
        else
        {
            return input;
        }
    }
})