$(document).ready(function() {
	// "Stripe::InvalidRequestError in Users::RegistrationsController#create"
$(".tab_item").not(":first").hide();
$(".tabs_conten .tab").click(function() {
	$(".tabs_conten .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");



$(".tab_items").not(":first").hide();
$(".tabs_services_wrap .tab_services").click(function() {
	$(".tabs_services_wrap .tab_services").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_items").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");


});


$('.bxslider').bxSlider({
  pagerCustom: '#bx-pager'
});