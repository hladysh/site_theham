$(document).ready(function($) {
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

  //   $('.overlay').click(function() {
  //     $(this).remove();
  // });


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

    $('#search_submit').click(function() {
         $('#search').toggle(500);
    });

    $('.header-nav li a ').click(function() {
        $('.header-nav li a ').removeClass("active");
        $(this).addClass('active');
    });


var menu_selector = ".top-menu"; 
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
 
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top }, 1500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
});
