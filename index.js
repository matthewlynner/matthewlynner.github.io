$(window).on('load', function() {
    if (document.cookie.indexOf('mycookie') == -1) {
        // cookie doesn't exist, create it now
        document.cookie = 'mycookie=1';

        disableScrolling();

        new Typed('#typed', {
            strings: ['Designer.', 'Developer.', 'Minneapolis, MN.'],
            stringsElement: null,
            startDelay: 1000,
            backSpeed: 30,
            backDelay: 500,
            typeSpeed: 50,
            loop: false,
            showCursor: false,
            onComplete: function () {
                $('html,body').animate({
                    scrollTop: $('.navbar').offset().top
                }, 1000, function () {
                    enableScrolling();
                    $('.jumbotron').addClass('d-none');
                });
            }
        });
    }
    else {
        $('.jumbotron').addClass('d-none');
    }
});

function disableScrolling() {
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
}

function enableScrolling() {
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
}