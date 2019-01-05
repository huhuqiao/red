var iAlpha = 6;

function changeOpacity(obj, iTarget) {  
    var Timer = null;
    clearInterval(Timer);  
    //关闭定时器  
    var iSpeed = 0;  
    //速度  
    if (iAlpha < iTarget) {  
        iSpeed = 15;  
    } else {  
        iSpeed = -15;  
    };  
    Timer = setInterval(function() {  
        if (iAlpha == iTarget) {  
            clearInterval(Timer);  
        } else {  
            iAlpha += iSpeed;  
            //设置透明度  
            obj.style.opacity = iAlpha / 100;  
        };  
    }, 800);  
}  