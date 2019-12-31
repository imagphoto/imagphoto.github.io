//<![CDATA[ 
jQuery(document).ready(function($){
$(window).load(function(){
$('.flexslider').flexslider({
animation: "fade",
slideshow: true,
directionNav:true,
slideshowSpeed: 5000,controlNav: true,
smoothHeight: true,
slideDirection: 'horizontal'
});
jQuery('.slides').addClass('loaded');
}); 
var aboveHeight = $('#leader-wrapper').outerHeight();
$(window).scroll(function(){
if ($(window).scrollTop() > 200){
$('#main-nav').addClass('fixed-nav').css('top','0').next()
.css('padding-top','0px');
} else {
$('#main-nav').removeClass('fixed-nav').next()
.css('padding-top','0');
}
});
});
//]]>
