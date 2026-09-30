function revealPortfolio() {
    
    $('#landing').hide();
    $('#main').show();
    
    $('a').addClass('newHover');
    $('.site-navigation').addClass('newHover');
    $('#footer').addClass('newHover');
    $('.nav-toggle').removeClass('oldToggle');
    $('.nav-toggle').addClass('newToggle');
    $('.nav-menu').addClass('new-nav-mobile');
    
}

$('document').ready(function() {
    
    $('#main').hide();
    
});
