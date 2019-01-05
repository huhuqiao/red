
var asd = document.getElementById('asd');
var iosewm=document.getElementById('iosewm')
var ewm=document.getElementById('ewm')
var androidewm = document.getElementById('androidewm')
var qwe = document.getElementById('qwe');
var zxc = document.getElementById('zxc');

var node_small = document.getElementById('node_small');
var poi = document.getElementById('poi');


asd.onmouseover = function (){
	iosewm.style.display='none';
	ewm.style.display = 'block';
}
asd.onmouseout = function (){
	iosewm.style.display='block'
	ewm.style.display = 'none';
}



qwe.onmouseover = function(){
	androidewm.style.display = 'none';
	zxc.style.display = 'block';
}
qwe.onmouseout = function(){
	androidewm.style.display = 'block';
	zxc.style.display = 'none';
}

 node_small.onmouseover = function (){
 	poi.style.display = 'block';
 }
 node_small.onmouseout = function (){
 	poi.style.display = 'none';
 }
 


'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {if (window.CP.shouldStopExecution(2)){break;} var source = arguments[i]; for (var key in source) {if (window.CP.shouldStopExecution(1)){break;} if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } }
window.CP.exitedLoop(1);
 }
window.CP.exitedLoop(2);
 return target; };

var OPTS = {
    fill: 'none',
    radius: 25,
    strokeWidth: { 50: 0 },
    scale: { 0: 1 },
    angle: { 'rand(-35, -70)': 0 },
    duration: 500,
    left: 0,
    top: 0,
    easing: 'cubic.out'
};

var circle1 = new mojs.Shape(_extends({}, OPTS, {
    stroke: '#FF8966'
}));

var circle2 = new mojs.Shape(_extends({}, OPTS, {
    radius: { 0: 15 },
    strokeWidth: { 30: 0 },
    stroke: '#E5446D',
    delay: 'rand(75, 150)'
}));

document.addEventListener('click', function (e) {
    circle1.tune({ x: e.pageX, y: e.pageY }).replay();

    circle2.tune({ x: e.pageX, y: e.pageY }).replay();
});






// // 回到顶部的按钮
// var totop = document.getElementById('totop');

// // 当拖动滚动条的时候执行
// window.onscroll = function () {
//   //1 当拖动滚动条的时候，当内容滚动出去 10px的时候，改变top的高度，并且显示回到顶部按钮
  
//   // 调用common.js getScroll函数，获取页面滚动出去的距离
//   var scrollTop = getScroll().scrollTop;
//   if (scrollTop > 10) {
//     // 显示回到顶部
//     totop.style.display = 'block';
//   } else {
//     // 显示回到顶部
//     totop.style.display = 'none';
//   }
// }

// //2 当点击回到顶部按钮的时候，动画的方式，回到最上面，让滚动距离为0
// var timerId = null;
// totop.onclick = function () {
//   if (timerId) {
//     clearInterval(timerId);
//     timerId = null;
//   }

//   timerId = setInterval(function () {
//     // 步进 每次移动的距离
//     var step = 10;
//     // 目标位置
//     var target = 0;

//     // 获取当前位置
//     var current = getScroll().scrollTop;

//     if (current > target) {
//       step = -Math.abs(step);
//     }

//     // 判断当前是否到达目标位置
//     if (Math.abs(current - target) <= Math.abs(step)) {
//       clearInterval(timerId);
//       document.body.scrollTop = target;
//       document.documentElement.scrollTop = target;
//       return;
//     }

//     current += step;
//     document.body.scrollTop = current;
//     document.documentElement.scrollTop = current;
//   }, 5);
// }
