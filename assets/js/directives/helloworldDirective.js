/**
 * Created by jellyglass on 28/1/16.
 */
app.directive('helloWorld',function(){
    return {
        restrict:"EA",
        template:"<div>Hello World {{name}} ! {{time}}<div class='content ng-transclude'></div></div>",
        scope:{
            name:'@',
            time:'@'
        },
        transclude:true
    }
})