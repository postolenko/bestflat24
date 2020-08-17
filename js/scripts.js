var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {

  $(".checkboxes_scrollbox").mCustomScrollbar();

});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

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

});