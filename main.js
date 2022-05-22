// navi, menuBtnの表示の切り替え
function toggle() {
    document.querySelector(".menuBtn").classList.toggle('open');
    document.querySelector("#navi").classList.toggle('active');
}



// summaryの背景ループ
document.querySelector(`#summary`).animate(
    [
        { backgroundPosition: '0 0' },
        { backgroundPosition: '-700px 700px' }
    ],
    {
        duration: 7000,
        iterations: Infinity
    }
);