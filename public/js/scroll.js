
/*===================================
            ScrollTop
=====================================*/


$("#scroll-top").click(function() {
  $("html").animate(
    {
      scrollTop: 0
    },
    "slow"
  );
});


/*===================================
            ScrollBottom
=====================================*/
$(".scroll-next").click(function() {
  $("html, body").animate(
    {
      scrollTop: $(window).height()
    },
    "linear"
  );
});

// Scroll then fixed
$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $("#scroll-top").addClass("active");
  } else {
    $("#scroll-top").removeClass("active");
  }
});
