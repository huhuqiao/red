$(function(){
    $("#ul>i").click(function(){
        var index = $(this).index();
        $("#uu>li").fadeOut(800);
        $("#uu>li").eq(index).fadeIn(800);
    })
})

   
    