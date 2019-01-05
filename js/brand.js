//第1个切换
var eachCard = document.getElementsByClassName('each-card');

for (var i = 0; i < eachCard.length; i++) {
    eachCard[i].onmouseover = function () {
        for (var i = 0; i < eachCard.length; i++) {
            eachCard[i].children[0].className = 'pic';
        }
        this.children[0].style.height = '80px';
        this.children[0].style.width = '80px';
    }
    eachCard[i].onmouseout = function () {
        this.children[0].style.height = '60px';
        this.children[0].style.width = '60px';
    }
}




//第2个切换
var topTopic = document.getElementsByClassName('top-topic')[0];
var topLeft = topTopic.children[0];
var topRight = topTopic.children[1];
var middleTopic = document.getElementsByClassName('middle-topic');
var oneTopic = middleTopic[0];
var twoTopic = middleTopic[1];

topLeft.onclick = function () {
    topLeft.className = 'inner select';
    topRight.className = 'inner';

    oneTopic.style.display = 'block';
    twoTopic.style.display = 'none';
}
topRight.onclick = function () {
    topRight.className = 'inner select';
    topLeft.className = 'inner';

    oneTopic.style.display = 'none';
    twoTopic.style.display = 'block';

}