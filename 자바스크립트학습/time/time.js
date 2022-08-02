var timecnt = 7;
setInterval(function () {
    timecnt--;
    document.querySelector('.timeout').innerHTML = `${timecnt}초 후에 내가 사라져볼게 얍`
}, 1000);
setTimeout(function () {
    document.querySelector('.timeout').style.display = "none"
}, 7000);