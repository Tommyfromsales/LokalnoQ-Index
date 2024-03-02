jQuery(document).ready(function () {
  const allTabsButons = jQuery(".tabs_button");
  const allTabs = jQuery(".tabs .tab");
  allTabsButons.click(function () {
    const thisParentCityAttr = jQuery(this).parent().attr("data-city");
   allTabsButons.parent().removeClass("tabs_item_active");
    jQuery(this).parent().addClass("tabs_item_active");
     allTabs.filter(".tab_active").removeClass("tab_active");
    allTabs.filter(`[data-city=${thisParentCityAttr}]`).addClass("tab_active");
  });
});

if(jQuery( window ).width() < 481){
jQuery(".menu-main-menu-container").prepend('<div class="mob_logo">Logo</div>');
jQuery(".menu-main-menu-container").append('<div class="mob_contact "><a href="/contact-us/" class="btn">Contact Us</a></div>');
}

if(jQuery( window ).width() < 1300){
jQuery(document).ready(function(){
      jQuery('.how-it-works .steps').addClass('owl-carousel');
      jQuery('.how-it-works .steps').owlCarousel({
        dots:true, 
        nav:false,
        touchDrag:true,
        mouseDrag:false,
        smartSpeed:2000,
        autoplay:true,
        autoplayTimeout:5000,
        items:3,
        responsive: {
              0: {
                items:1 
              },
              440: {
                items: 1 
              },
              680: {
                items: 2 
              },
              901: {
                items:3 
              } ,
              1300: {
                items:4
              } 
            } 
      })
    });
}

if(jQuery( window ).width() < 992){
jQuery(document).ready(function(){
      jQuery('#new_columns-162-10').addClass('owl-carousel');
      jQuery('#new_columns-162-10').owlCarousel({
        dots:true, 
        nav:false,
        touchDrag:true,
        mouseDrag:true,
        smartSpeed:2000,
        autoplay:true,
        autoplayTimeout:5000,
        items:1,
        responsive: {
              0: {
                items:1 
              }
              
            } 
      })
    });
}

jQuery(function() {
  jQuery('.accordion_faq .title_content').click(function(){
    jQuery(this).toggleClass(' active ');
    jQuery(this).siblings().removeClass(' active '); 
    jQuery('.submenu').stop().slideUp();
    jQuery('.active .submenu').stop().slideDown();
    return false;
  });
});


jQuery(".w-nav-icon").click(function(){
        jQuery(".oxy-nav-menu").toggleClass('open');
 });

jQuery(".w-nav-control").click(function(){
        jQuery(".w-nav-control").toggleClass('active');
 });


jQuery(document).ready(function() {

    jQuery('.testimonials1').addClass('owl-carousel');

    var owl = jQuery('.testimonials1');

      owl.owlCarousel({

      loop: true,

      dots:false,

      nav:true,

      touchDrag:true,

      mouseDrag:true,

      autoHeight:true,

      autoplay:true,      

       margin:10,

      //autoplayHoverPause : true,

      //autoplayTimeout:2500,

      items: 1,

      responsive: {

          0: {

            items: 1

          }          

      }

    });

 

 });

jQuery(document).ready(function(){
        if(navigator.userAgent.indexOf('Mac') > 0)
        jQuery('body').addClass('mac-os');
      });