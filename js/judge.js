var htel = document.getElementById('htel');
htel.onblur = function () {
    var reg = /^\d{5,12}$/;
    var span = this.nextElementSibling;
    if (reg.test(this.value)) {
        span.innerText = '';
        span.style.color = '';
    } else {
        span.innerText = '号码格式不对';
        span.style.color = 'red';
    }
}
var hpsd = document.getElementById('hpsd');
hpsd.onblur = function () {
    var reg = /^\w{6,12}$/;
    var span = this.nextElementSibling;
    if (reg.test(this.value)) {
        span.innerText = '';
        span.style.color = '';
    } else {
        span.innerText = '密码格式不对';
        span.style.color = 'red';
    }
}
var hture = document.getElementById('hture');
hture.onblur = function () {
    var span = this.nextElementSibling;
    if (this.value !== hpsd.value) {
        span.innerText = '密码不一样';
        span.style.color = 'red';
    }else {
        span.innerText = '';
        span.style.color = '';
    }
}