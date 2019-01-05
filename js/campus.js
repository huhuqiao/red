// 顶部导航栏
var lis = document.getElementById('nav').children;
// console.log(lis);
var move = document.getElementById('move');
for (var i = 0; i < lis.length - 1; i++) {
    lis[i].setAttribute('index',i);
    // console.log(i);
    lis[i].onmouseenter = function (e) {
        var index = parseInt(this.getAttribute('index'));
        animation(index * 126,move);
    };
};

// 图片效果
function getScroll() {
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
};
var ul = document.getElementById('job');
// var lis = ul.children;
document.onscroll = function () {
var scrollTop = getScroll().scrollTop;
    if (scrollTop > 10) {
        $('#job>li>div>img').eq(0).show(800,function () {
            $('#job>li>div>img').eq(1).show(800,function () {
                $('#job>li>div>img').eq(2).show(800);
            });
        });
    };
};
