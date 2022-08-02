let bar = document.querySelector('.blue')
let lyric = document.querySelector(".lyrics")
lyric.addEventListener("scroll", function () {
    let scrollTop = lyric.scrollTop;
    let scrollHeight = lyric.scrollHeight - lyric.clientHeight;
    let per = scrollTop / scrollHeight;
    bar.style.width = `${per * 250}px`
});