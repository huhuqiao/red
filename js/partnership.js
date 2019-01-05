    //第1个切换
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
    //第2个切换
    var one = document.getElementsByClassName('icon-help');
    var two = document.getElementsByClassName('three-paper')[0];
    for (var i = 0; i < one.length; i++) {
        one[i].onmouseover = function () {
            two.style.display = 'block';
        }
        one[i].onmouseout = function () {
            two.style.display = 'none';
        }
    }
    //第3个切换
    var issueBtn = document.getElementsByClassName('issue-btn')[0];
    var eachs = document.getElementsByClassName('each');
    var allIssue = document.getElementsByClassName('all-issue');
    allIssue[0].style.display = 'block';
    for (var i = 0; i < eachs.length; i++) {
        eachs[i].setAttribute('index', i)
        eachs[i].onclick = function () {
            for (var i = 0; i < eachs.length; i++) {
                eachs[i].className = 'each';
                allIssue[i].style.display = 'none';
            }
            this.className = 'each select';
            var index = this.getAttribute('index')
            allIssue[index].style.display = 'block';
        }
    }


    console.time("timer");
    for(var i=0;i<10000;i++){}
    console.timeEnd("timer");