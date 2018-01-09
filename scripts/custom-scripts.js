$(document).ready(function() { 
//mobile footer and header
$('.search-input-show').on('click', function(){

	$('.logo').addClass('hide');
	$('.header-search-input').removeClass('hide');
	$('.navbar-inverse .navbar-toggle').css('margin-right', '0');
	$('.search-input-show').addClass('hide');
	$('.header-mobile-nav img').css('margin-left', '0');
	$('.navbar-header .sidebar-search-input').focus();

});
   $(window).resize(function(){
        if ($(window).width() > 1200){
        	$('.logo').removeClass('hide');
        	$('.header-search-input').addClass('hide');
        	$('.navbar-inverse .navbar-toggle').css('margin-right', '20px');
        	$('.search-input-show').removeClass('hide');
        	$('.header-mobile-nav img').css('margin-left', '20px');
        }
 mobileFooter();
    });
function mobileFooter(){
        if($(window).width() <= 425){
        	$('#osaine').addClass('collapse');
        	$('#obchod').addClass('collapse');
        	$('.shop button').attr('data-toggle', 'collapse');
        	$('.about-company button').attr('data-toggle', 'collapse');

        }
        if($(window).width() > 425 && $(window).width() <= 812){
        	$('#osaine').removeClass('collapse');
        	$('#obchod').removeClass('collapse');
        	$('.shop button').attr('data-toggle', '');
        	$('.about-company button').attr('data-toggle', '');

        }
    }
    mobileFooter();

   



});