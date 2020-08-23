$(function () {
    checkFirstVisit();
});

function checkFirstVisit() {
    if(document.cookie.indexOf('mycookie')==-1) {
      // cookie doesn't exist, create it now
        document.cookie = 'mycookie=1';
        disableScrolling();

        setTimeout(function(){
            $('html,body').animate({
                scrollTop: $('.navbar').offset().top
            }, 1000);
            enableScrolling()
        }, 6500);
        
        new Typed('#typed', {
            strings: ['Designer.', 'UX Developer.', 'Minneapolis, MN'],
            stringsElement: null,
            startDelay: 1000,
            backSpeed: 30,
            backDelay: 500,
            typeSpeed: 50,
            loop: false,
            showCursor: false
        });
    }
    else {
        $('.jumbotron').addClass('d-none');
    }
}

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