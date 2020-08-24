function getWrapperPadding() {
  if($(".inner_header").length > 0) {
    $(".wrapper").css({
      "padding-top" : $(".inner_header").height() + "px"
    });
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {

  $(".checkboxes_scrollbox").mCustomScrollbar();

});

$(window).resize(function() {

getWrapperPadding();

});

$(document).scroll(function() {



});

$(document).ready(function() {

  getWrapperPadding();

    if( $(".portfolio_slider").length > 0 ) {
        $(".portfolio_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            // fade: true,
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 540,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }

    // ----------

    $('.date_input').datepicker({
      dateFormat: "d MM yyyy"
    });

    $(".dropdown_box_title").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".dropdown_box_wrapp");
      var dropdownBlock = parentBlock.find(".dropdown_box");
      if(dropdownBlock.is(":hidden")) {
        dropdownBlock.slideDown(300);
        $(this).addClass("active");
      } else {
        dropdownBlock.slideUp(300);
        $(this).removeClass("active");
      }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 ) {
        $(".dropdown_box").slideUp(300);
        $(".dropdown_box_title").removeClass("active");
      }
    });

    $(document).mouseup(function (e){
        hide_element = $(".dropdown_box")
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
          $(hide_element).slideUp(300);
          parentBlock = $(hide_element).closest(".dropdown_box_wrapp");
          parentBlock.find(".dropdown_box_title").removeClass("active");
        }
    });

    var value, form, dropdowns;

    $(".dropdown_box p").on("click", function(e) {
      e.preventDefault();
      value = $(this).text();
      parentBlock = $(this).closest(".dropdown_box_wrapp");
      parentBlock.find(".dropdown_box_title p").text(value);
      parentBlock.find("input[type='hidden']").val(value);
      $(this).closest(".dropdown_box").slideUp(300);
    });

    $(".reset_filters").on("click", function(e) {
      e.preventDefault();
      form = $(this).closest("form");
      form.find(".filter_input").val("");
      dropdowns = form.find(".dropdown_box_wrapp");
      dropdowns.each(function() {
        value = $(this).find(".placeholder_box").html();
        $(this).find(".dropdown_box_title").html(value);
      });
    });

    // ---------

    $(".drpdown_item_header").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".drpdown_item");
      dropdownBlock = parentBlock.find(".dropdown_item_box");
      if(dropdownBlock.is(":hidden")) {
        dropdownBlock.slideDown(300);
        $(this).addClass("active");
      } else {
        dropdownBlock.slideUp(300);
        $(this).removeClass("active");
      }
    });

    // ----------

    if( $(".slider_1").length > 0 ) {
        $(".slider_1").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendArrows: $(".slider_1_append_arrows"),
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/prev.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/prev.svg"></button>'
        });
    }

    if( $(".testimonial_slider").length > 0 ) {
        $(".testimonial_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendArrows: $(".testimonial_slider_arrows"),
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/prev.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/prev.svg"></button>'
        });
    }

    // ----------

    $("[data-popup-link]").on("click", function(e) {
        e.preventDefault();
        popupName = $(this).attr("data-popup-link");
        div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        $("body").addClass("fixed");
        $("body").css({
            "position" : "fixed",
            "top" :  -$(document).scrollTop() + "px",
            "overflow" : "hidden",
            "right" : 0,
            "left" : 0,
            "bottom" : 0,
            "padding-right" : scrollWidth + "px"
        });
        $(".popup_bg").fadeIn(300);
        $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(".close_popup, .popup_bg").on("click", function(e) {
        e.preventDefault();
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // ------------

  $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
  });
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 1024) {
              $("#resp_nav").fadeOut(300);
              $(".respmenubtn").removeClass("active");
      }
  });

  // ----------

  $(document).on("click", ".dropdown_btn", function(e) {
    e.preventDefault();
    parentBlock = $(this).closest("li");
    dropdownBlock = parentBlock.children("ul");
    if( dropdownBlock.is(":hidden") ) {
          dropdownBlock.slideDown(300);
          $(this).addClass("active");
      } else {
          dropdownBlock.slideUp(300);
          $(this).removeClass("active");
      }
  });


  $(".resp_filter_btn").on("click", function(e) {
    e.preventDefault();
    if($("#filters").is(":hidden")) {
      $("#filters").slideDown(300);
    } else {
      $("#filters").slideUp(300);
    }
  });



});