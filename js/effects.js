$(document).ready(function() {
    $("#m-btn").on('click', function(){
        $('#menu-mobile').toggleClass('active');
        $('header').toggleClass('active');
        $("#menu-mobile-bg").toggleClass('active');
    });

    $('.send-message-head').on('click', function(){
        $(this).addClass('active');
        $('.show-historic-head').removeClass('active');
        $('section#talk-us .talk-us-box .show-historic-body').removeClass('active');
        $('section#talk-us .talk-us-box .send-message-body').addClass('active');
    });
    $('.show-historic-head').on('click', function(){
        $(this).addClass('active');
        $('.send-message-head').removeClass('active');
        $('section#talk-us .talk-us-box .send-message-body').removeClass('active');
        $('section#talk-us .talk-us-box .show-historic-body').addClass('active');
    });

});