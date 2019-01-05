var txt = document.getElementById('txt');
txt.onfocus = function () {
    if (this.value.length !== 0) {
        this.value = '';
    }
}
txt.onblur = function () {
    if (this.value.length === 0) {
        this.value = '请输入你想搜索的职位';
    }
}