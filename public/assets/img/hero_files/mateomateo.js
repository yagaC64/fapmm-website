$(document).ready( function() {
    setMainHeight()
    // Navbar change color on scroll
    function checkScroll(){
        var opacity = 100; //start point navbar fixed to top changes in px

        if($(window).scrollTop() > opacity){
            $('.navbar').addClass("navchange");
        }else{
            $('.navbar').removeClass("navchange");
        }
    }

    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }
    
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });
    
});

$(window).resize(function() {
    setMainHeight()
});

function setMainHeight() {
    
    var windowHeight = $(window).height();
    var headerHeight = $('nav.navbar').height();
    var footerHeight = $('footer').height();
    var mainHeight = windowHeight -  footerHeight;
    $('main').css('min-height', mainHeight);

}