var index = 0;
var itmer = null;
let inde = 0;
var a = 0;
$(window).on('mousewheel', function (event) {
    clearTimeout(itmer)
    itmer = setTimeout(function () {
        index = index - event.deltaY;
        $('.header').removeClass('noshow');
        inde = $('.nav li').length - 1;
        if (index > inde) {
            index = -1;
            index++
        }
        fn();
    }, 300)
});

$('.nav li').click(function () {
    index = $(this).index();
    a = index;
    $('.header').removeClass('noshow');
    fn();
});


function fn() {
    if (index == 0) {
        $('.header').addClass('noshow');
    }
    if (index == -1) {
        index = inde;
    }
    $('.nav li').eq(index).addClass('item').siblings().removeClass('item');
    $('.page').eq(index).show().siblings('.page').hide();

    setTimeout(function () {
        $('.page').eq(index).removeClass('page3title').siblings('.page').addClass('page3title');
    }, 50)
}

var stn = null;
clearInterval(stn);
    stn = setInterval(function () {
        a++;
        if (a > inde) {
            a = -1;
            a++;
        }
        $('.nav li').eq(a).click();
    }, 3000)









