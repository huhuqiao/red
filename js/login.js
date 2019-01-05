function my$(id) {
    return document.getElementById(id);
}
my$('le').onclick=function(){
    my$('le').className='xyl_gn dj'
    my$('re').className='xyl_ga'
    my$('let').style.display='block';
    my$('ret').style.display='none';
}
my$('re').onclick=function(){
    my$('le').className='xyl_gn'
    my$('re').className='xyl_ga dj'
    my$('ret').style.display='block';
    my$('let').style.display='none';
}
