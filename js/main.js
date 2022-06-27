// header fixed
$(window).scroll(function () {
    if ($(this).scrollTop() >= 80) {
        $(".fixed-header").css("background-color", "#fff");
        $(".fixed-header").css("box-shadow", "0px 5px 15px 0px #f7e4f1");
    } else {
        $(".fixed-header").css("background-color", "transparent");
        $(".fixed-header").css("box-shadow", "none");

    }
});
