$(function(){    
    $('#hxian>ul').fadeOut()
    $('#hxian>ul').first('ul').fadeIn(3000,fn1)
});
function fn1() {      
    $(this).fadeOut(3000,function(){
        var index1 = $(this).index();
        if(index1 === 3){
            // $('#btn1').click();
            
            $('#hxian>ul').first('ul').fadeIn(3000,fn1);
        }else{
        
        $(this).next('ul').fadeIn(3000,fn1);}
    })
}
   