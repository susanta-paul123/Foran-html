(function ($) {
    'use strict';
    var a = 0;
    $(window).scroll(function(){

        var sticky = $('header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 250) sticky.addClass('sticky-nav');
        else sticky.removeClass('sticky-nav');


    //counter animation

    if($('.customer-success-section').length === 1){
        var oTop = $(".counter-box").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".counter").each(function () {
                var $this = $(this),
                    countTo = $this.attr("data-number");
                $({
                    countNum: $this.text()
                }).animate(
                    {
                        countNum: countTo
                    },
    
                    {
                        duration: 850,
                        easing: "swing",
                        step: function () {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                        },
                        complete: function () {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
    
                            $this.addClass('zoom-text')
                        }
                    }
                );
            });
    
            
            // $(".counter2").each(function () {
            //     var $this = $(this),
            //         countTo = $this.attr("data-number");
            //     $({
            //         countNum: $this.text()
            //     }).animate(
            //         {
            //             countNum: countTo
            //         },
    
            //         {
            //             duration: 850,
            //             easing: "swing",
            //             step: function () {
            //                 $this.text(
            //                     Math.ceil(this.countNum).toLocaleString("en") + "k"
            //                 );
            //             },
            //             complete: function () {
            //                 $this.text(
            //                     Math.ceil(this.countNum).toLocaleString("en") + "k"
            //                 );
            //                 $this.addClass('zoom-text')
            //             }
            //         }
            //     );
            // });
    
    
            a = 1;
        }
    }
   



    });


    jQuery(document).ready(function ($) {

        AOS.init({
            once: true,
        });


        $('.carousel').carousel({
            interval: 2000,
        })
    //home page slider counter  
        
    var totalItems = $('.carousel-item').length;
    var currentIndex = $('.carousel-item.active').index();
    $('.num').html(''+'<span>' + ("0"+currentIndex).slice(-2) + '</span>' + '<span> / </span>' + ("0"+totalItems).slice(-2) + '');
    
    
    
    $('.bs-slider-next').click(function(){
        currentIndex = $('.carousel-item.active').index()+1;
        console.log(currentIndex)
  
          if(currentIndex === totalItems+1){
              $('.num').html('' + '<span>' + ("0"+1).slice(-2) + '</span>' + '<span>/</span>' + ("0"+totalItems).slice(-2) + ''); 
          }
          else{
              $('.num').html('' + '<span>' + ("0" + currentIndex).slice(-2) + '</span>' + '<span>/</span>' + ("0"+totalItems).slice(-2) + ''); 
          }
    })

    $('.bs-slider-prev').click(function(){
        currentIndex = $('.carousel-item.active').index() -1;
        console.log(currentIndex, totalItems)
  
          if(currentIndex === 0){
              $('.num').html('' + '<span>' + ("0" + totalItems).slice(-2) + '</span>' + '<span>/</span>' + ("0"+totalItems).slice(-2) + ''); 
          }
          else{
              $('.num').html('' + '<span>' + ("0" + currentIndex).slice(-2) + '</span>' + '<span>/</span>' + ("0"+totalItems).slice(-2) + ''); 
          }
    })

    //
    $('.horse-racing .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        }
    })
    // 
    $('.sport-horse .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        }
    })
    // 
    $('.breeding .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        }
    })
    
    //ambassadors

    $('.ambassadors .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout:4000,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        margin:30,
        lazyLoad: true,
        items: 1,
        responsiveClass: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items:1,
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
        });


        //cs-carousel

    $('.cs-carousel .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout:4000,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        margin:30,
        lazyLoad: true,
        items: 1,
        responsiveClass: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items:1,
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
        });

        //siter brand carousel


        $('.siter-brand-carousel .owl-carousel').owlCarousel({
            loop:true,
            autoplay:false,
            margin:15,
            nav:true,
            dots:false,
            center:true,
            autoWidth:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                },
                1200:{
                  items:3
                }
            }
          })


        // winning-highlight-carousel
        $('.winning-highlight-carousel .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            margin:15,
            items: 1,
            nav: true,
            dots: false,
            center:true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        //career-highlight-carousel
        $('.career-highlight-carousel .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            margin:15,
            items: 1,
            nav: true,
            dots: false,
            center:true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        //latest-news-carousel

        $('.latest-news .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        })

        //blogs-carousel

        $('.blogs .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        })

        //our-galley-carusel-carousel

        $('.our-galley-carusel .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        })

        //our-videos-carusel
        

        $('.our-videos-carusel .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        })

        //global-carousel

        
        $('.global-carousel .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                }
            }
        })
      

        //Expert Nutritional Team
        $('.expert-nutrition-team .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })

        //Explore Latest Nutritional Articles
        $('.elna-carousel .owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
        //


        //Frequently Recommended Together
        $('.frequently-recommended-carousel .owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })

        //Best seller
        $('.best-sellers-carousel .owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        })

        //

        
        $('.touch-persons .owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                1000:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        })



        //

        $('#a .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout:4000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:30,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items:1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
            });
    
            $('#b .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout:4000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:30,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items:1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
            });
    
            $('#c .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout:4000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:30,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items:1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
            });


           
    
    function europeScroll(){
        $("#europeTabs li").click(function() {
            // initialize
            let activeClass = "active";
            let index = $(this).data("index");
            let element = $(
                '#europeScroll li[data-index="' + index + '"]'
            );
            let parentDiv = $("#europeScroll");
            let hDiv = $('#europeScroll').offset().top;
    
            // check if already active
            if ($(this).hasClass(activeClass)) {
                return;
            }
    
            // add and remove classes
            $("#europeTabs li").removeClass(activeClass);
            $(this).addClass(activeClass);
            element.addClass(activeClass);
    
            // lets scroll
            $("#europeScroll").animate(
                {
                    scrollTop:
                        parentDiv.scrollTop() +
                        element.position().top - 50
                },
                1000
            );
        });
    }
europeScroll();

//end

function restofeuropeScroll(){
        $("#restofeuropeTabs li").click(function() {
            // initialize
            let activeClass = "active";
            let index = $(this).data("index");
            let element = $(
                '#restofeuropeScroll li[data-index="' + index + '"]'
            );
            let parentDiv = $("#restofeuropeScroll");
            let hDiv = $('#restofeuropeScroll').offset().top;
    
            // check if already active
            if ($(this).hasClass(activeClass)) {
                return;
            }
    
            // add and remove classes
            $("#restofeuropeTabs li").removeClass(activeClass);
            $(this).addClass(activeClass);
            element.addClass(activeClass);
    
            // lets scroll
            $("#restofeuropeScroll").animate(
                {
                    scrollTop:
                        parentDiv.scrollTop() +
                        element.position().top - 50
                },
                1000
            );
        });
    }
    restofeuropeScroll();

    //end

    function nordicScroll(){
        $("#nordicTabs li").click(function() {
            // initialize
            let activeClass = "active";
            let index = $(this).data("index");
            let element = $(
                '#nordicScroll li[data-index="' + index + '"]'
            );
            let parentDiv = $("#nordicScroll");
            let hDiv = $('#nordicScroll').offset().top;
    
            // check if already active
            if ($(this).hasClass(activeClass)) {
                return;
            }
    
            // add and remove classes
            $("#nordicTabs li").removeClass(activeClass);
            $(this).addClass(activeClass);
            element.addClass(activeClass);
    
            // lets scroll
            $("#nordicScroll").animate(
                {
                    scrollTop:
                        parentDiv.scrollTop() +
                        element.position().top - 50
                },
                1000
            );
        });
    }
    nordicScroll();

    //end

    function australiaScroll(){
        $("#australiaTabs li").click(function() {
            // initialize
            let activeClass = "active";
            let index = $(this).data("index");
            let element = $(
                '#australiaScroll li[data-index="' + index + '"]'
            );
            let parentDiv = $("#australiaScroll");
            let hDiv = $('#australiaScroll').offset().top;
    
            // check if already active
            if ($(this).hasClass(activeClass)) {
                return;
            }
    
            // add and remove classes
            $("#australiaTabs li").removeClass(activeClass);
            $(this).addClass(activeClass);
            element.addClass(activeClass);
    
            // lets scroll
            $("#australiaScroll").animate(
                {
                    scrollTop:
                        parentDiv.scrollTop() +
                        element.position().top - 50
                },
                1000
            );
        });
    }
    australiaScroll();

    //end

    function middleeastScroll(){
        $("#middleeastTabs li").click(function() {
            // initialize
            let activeClass = "active";
            let index = $(this).data("index");
            let element = $(
                '#middleeastScroll li[data-index="' + index + '"]'
            );
            let parentDiv = $("#middleeastScroll");
            let hDiv = $('#middleeastScroll').offset().top;
    
            // check if already active
            if ($(this).hasClass(activeClass)) {
                return;
            }
    
            // add and remove classes
            $("#middleeastTabs li").removeClass(activeClass);
            $(this).addClass(activeClass);
            element.addClass(activeClass);
    
            // lets scroll
            $("#middleeastScroll").animate(
                {
                    scrollTop:
                        parentDiv.scrollTop() +
                        element.position().top - 50
                },
                1000
            );
        });
    }
    middleeastScroll();

    //end 
    function fareastScroll(){
        $("#fareastTabs li").click(function() {
            // initialize
            let activeClass = "active";
            let index = $(this).data("index");
            let element = $(
                '#fareastScroll li[data-index="' + index + '"]'
            );
            let parentDiv = $("#fareastScroll");
            let hDiv = $('#fareastScroll').offset().top;
    
            // check if already active
            if ($(this).hasClass(activeClass)) {
                return;
            }
    
            // add and remove classes
            $("#fareastTabs li").removeClass(activeClass);
            $(this).addClass(activeClass);
            element.addClass(activeClass);
    
            // lets scroll
            $("#fareastScroll").animate(
                {
                    scrollTop:
                        parentDiv.scrollTop() +
                        element.position().top - 50
                },
                1000
            );
        });
    }
    fareastScroll();

    //end


    function usScroll(){
        $("#usTabs li").click(function() {
            // initialize
            let activeClass = "active";
            let index = $(this).data("index");
            let element = $(
                '#usScroll li[data-index="' + index + '"]'
            );
            let parentDiv = $("#usScroll");
            let hDiv = $('#usScroll').offset().top;
    
            // check if already active
            if ($(this).hasClass(activeClass)) {
                return;
            }
    
            // add and remove classes
            $("#usTabs li").removeClass(activeClass);
            $(this).addClass(activeClass);
            element.addClass(activeClass);
    
            // lets scroll
            $("#usScroll").animate(
                {
                    scrollTop:
                        parentDiv.scrollTop() +
                        element.position().top - 50
                },
                1000
            );
        });
    }
    usScroll();
        

          $(window).resize(function(){
            if($(window).width() <= 991){
                $( ".header-right" ).appendTo( ".navbar-collapse" );
            }else{
                $( ".header-right" ).prependTo( ".header-right-wrap" );
                
            }
         })

         //
        $("#phone").intlTelInput({});
        $("#phone2").intlTelInput({});
        $("#phone3").intlTelInput({});
        $("#phone4").intlTelInput({});
        $("#phone5").intlTelInput({});
        $("#phone6").intlTelInput({});
        $("#phone7").intlTelInput({});
        $("#phone8").intlTelInput({});


        $("#phone, #phone2, #phone3, #phone4,#phone5,#phone6,#phone7,#phone8").val('')

        //

        $('.content-panel').hide();
        $('.content-panel').eq(0).show();
        $('.raa_tab').eq(0).addClass('active');

        $('.raa_tab').click(function(){
            $(this).parent('.filter-category').siblings('.filter-category').children('.content-panel').slideUp();
           $(this).siblings('.raa_tab').next().slideUp();
           $(this).parent('.filter-category').siblings('.filter-category').children('.raa_tab').removeClass('active');
           $(this).toggleClass('active');
           $(this).next('.content-panel').slideToggle();
        });


        //
        
        $(".mega-menu").parent('.dropdown').css({'position':'static'}) 
        $(window).resize(function(){
            if ($(window).width() >= 980){	 

            
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".mega-menu").toggleClass("show"); 
            });

            
            $( ".navbar .mega-menu" ).mouseleave(function() {
                $(this).removeClass("show");  
            });

            $('header .navbar .mega-menu').show()
        
             
            }	
            else{
                $('header .navbar .mega-menu').hide();
                
            }
        }); 
        
        //

        $('.checked-item-close').on('click', function(){
            $(this).parent('.checked-name').remove()
        })

    //products details images carousel

        var bigimage = $("#productBigImage");
        var thumbs = $("#thumbs");
        var syncedSecondary = true;

        bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            autoplay: true,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

        thumbs
        .on("initialized.owl.carousel", function() {
        thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
        })
        .owlCarousel({
            items:3,
            dots: false,
            nav: false,
            margin:10,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            ],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 3,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

        function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
        current = count;
        }
        if (current > count) {
        current = 0;
        }
        thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
        .find(".owl-item.active")
        .first()
        .index();
        var end = thumbs
        .find(".owl-item.active")
        .last()
        .index();

        if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
        }

        function syncPosition2(el) {
        if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
        }
        }

        thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
        });

        //   End products details images carousel 
        
        
   

    });//end document ready


   

    
    if($(window).width() <= 991){
        $( ".header-right" ).appendTo( ".navbar-collapse" );
        $('.mobile-toggle').click(function(){
            $('.mega-menu').slideToggle();
        })
    }
}(jQuery));