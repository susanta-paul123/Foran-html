var numSlick = 0;
    function countryScroll(){
        $('.countryTabs').each( function() {
            numSlick++;

            $(this).attr("id", 'scrollfix' + numSlick)
            $(this).next().attr("id", 'countryscroll' + numSlick)

            $( "#scrollfix" + numSlick + " " + "li").click(function() {
                // alert()
                // initialize
                let activeClass = "active";
                let index = $(this).data("index");
                let element = $(
                    '#countryscroll11 li[data-index = "' + index + '"]',

                    // $("#countryscroll" + numSlick + " " + "li")+'[data-index = "' + index + '"]'
                );
                let parentDiv = $("#countryscroll" + numSlick);

                // let hDiv = $('#europeScroll').offset().top;
        
                // check if already active
                if ($(this).hasClass(activeClass)) {
                    return;
                }
        
                // add and remove classes
                $( "#scrollfix1").removeClass(activeClass);
                $(this).addClass(activeClass);
                element.addClass(activeClass);
        
                // lets scroll
                $("#countryscroll11").animate(
                    {
                        scrollTop:
                            parentDiv.scrollTop() +
                            element.position().top - 50
                    },
                    1000
                );
            });
        })
    }


    countryScroll();
    
    
    
    
    function europeScroll(){
        $("#europeTabs li").click(function() {
            // initialize
            let activeClass = "active";
            let index = $(this).data("index");
            let element = $(
                '#europeScroll li[data-index="' + index + '"]'
            );
            let parentDiv = $("#europeScroll");
            // let hDiv = $('#europeScroll').offset().top;
    
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
// europeScroll();

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
    // restofeuropeScroll();

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
    // nordicScroll();

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
    // australiaScroll();

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
    // middleeastScroll();

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
    // fareastScroll();

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
    // usScroll();
        