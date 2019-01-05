function my$(id) {
    return document.getElementById(id);
}
my$('le').onclick=function(){
    my$('le').className='xyl_cph dj'
    my$('re').className='xyl_cph'
    my$('let').style.display='block';
    my$('ret').style.display='none';
}
my$('re').onclick=function(){
    my$('le').className='xyl_cph'
    my$('re').className='xyl_cph dj'
    my$('ret').style.display='block';
    my$('let').style.display='none';

}