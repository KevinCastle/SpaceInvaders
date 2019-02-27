$(".player").on('touchmove', function (e) {
    var x = e.touches[0].pageX;
    $("#spaceship").css('left', x);
});

$(document).on('mousemove', (event) => {
    $('#spaceship').css({
        left: event.clientX
    });
});