function my$(id) {
    return document.getElementById(id);
}
my$('pull').onmouseenter = function () {
    my$('down').style.display = 'block';
}
my$('pull').onmouseleave = function () {
    my$('down').onmouseenter = function () {
        this.style.display = 'block';
        var public = this.getElementsByClassName('public');
        for (var i = 0; i < public.length; i++) {
            public[i].onmouseenter = function () {
                this.style.backgroundColor = '#eee';
            }
            public[i].onmouseleave = function () {
                this.style.backgroundColor = '';
            }
        }
    }
    my$('down').onmouseleave = function () {
        this.style.display = 'none';
    }
}

var x_item = document.getElementsByClassName('x_item')
var dot=document.getElementsByClassName('dot')
var count = -1;
var bar = document.getElementsByClassName('bar');
function fn() {
    count++;
    if (count >= bar.length) {
        count = 0
    }
    var nom = 0;
    var timer = setInterval(function () {
        if (nom == 100) {
            clearInterval(timer);
            bar[count].style.height = 0 + '%';
            x_item[count].className='x_item';
            dot[count].className='dot';
            nom = 0
            fn()
            return
        } else {
            nom += 1;
            num(nom);
        }
    }, 18)
    function num(c) {
        bar[count].style.height = c + '%';
        x_item[count].className='x_item circulation';
        dot[count].className='dot red';
    }
}
window.onload= fn()

var wechat = document.getElementsByClassName('wechat')
var ewm = document.getElementsByClassName('vipcn');
wechat[0].onmouseenter = function () {
    ewm[0].style.display = 'block';
}
wechat[0].onmouseleave = function () {
    ewm[0].style.display = 'none';
}
var small = document.getElementsByClassName('x_erweima x_gy')
var bigewm = document.getElementsByClassName('bigewm')
small[0].onmouseenter = function () {
    bigewm[0].style.display = 'block';
}
small[0].onmouseleave = function () {
    bigewm[0].style.display = 'none';
}

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 52) {
      my$('top').style.display = 'block';
    } else {
        my$('top').style.display = 'none';
    }
  }
  var timerId = 0;
  my$('top').onclick = function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = 0;
  }
  timerId = setInterval(function () {
    var step = 18;
    var target = 0;
    var current = document.documentElement.scrollTop;
    if (current > target) {
      step = -Math.abs(step);
    }
    if (Math.abs(current - target) <= Math.abs(step)) {
      clearInterval(timerId);
      document.documentElement.scrollTop = target;
      return;
    }
    current += step;
    document.documentElement.scrollTop = current;
  }, 6);
}