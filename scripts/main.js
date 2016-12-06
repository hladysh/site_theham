$(document).ready(function($) {
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

    $('.overlay').click(function() {
      $(this).remove();
  });


    if(jQuery().quicksand){
        var $data = $(".portfolio-area").clone();
        $('.portfolio-categ li').click(function(e){
            $(".filter li").removeClass("active");
            var filterClass = $(this).attr('class').split(' ').slice(-1)[0];
            if(filterClass == 'all') {
                var $filteredData = $data.find('.portfolio-item2');
            } else{
                var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
            }
            $(".portfolio-area").quicksand($filteredData, {
                duration: 800,
                adjustHeight: 'auto'
            });
            $(this).addClass("active");
            return false;
        });
    } 

    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager'
    });
});

    $('#search_submit').click(function() {
         $('#search').toggle(500);
    });


