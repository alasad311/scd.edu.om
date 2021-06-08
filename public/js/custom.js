/*===================================
          Slider
=====================================*/

if ($(".showcase").length > 0) {
    $(".showcase .slider-wrapper").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: $(".indicator-style-3 > .flaticon-up-arrow"),
    nextArrow: $(".indicator-style-3 > .flaticon-down-arrow")
    });

    // On before home slider change
    $(".slider-wrapper").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
    ) {
    var totalSlide = slick.slideCount;
    var currentSlideindex = nextSlide;
    ++currentSlideindex;
    var progress = 100 / totalSlide;
    var progressHeight = progress * currentSlideindex;
    SliderProgressbarStart(progressHeight);
    $(".indicator-style-3 .current").text(check_number(currentSlideindex));
    });

    $(window).on("load", function() {
    var totalSlide = $(".slider-wrapper").slick("getSlick").slideCount;
    var progress = 100 / totalSlide;
    var progressHeight = progress * 1;
    SliderProgressbarStart(progressHeight);
    });

    function check_number(num) {
    var IsInteger = /^[0-9]+$/.test(num);
    return IsInteger ? "0" + num : null;
    }

    function SliderProgressbarStart(height) {
    $(".home-slider-progressbar .home-slider-progress-active").css({
        height: height + "%"
    });
    }
}

/*===================================
          Rotate Text
=====================================*/

if($(".rotate").length > 0)
{
  $(".rotate").textrotator({
    animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 2000 // How many milliseconds until the next word show.
  });

}
$(".slider-item").on('click',function(){
  var url = $(this).attr("data-url");

  if(url)
  {
    window.open(url,'_blank');
  }
})

$(".photo-box").on('click',function(){
  var url = $(this).attr("data-url");
  if(url)
  {
    window.open(url,'_blank');
  }
})

$('.photo-box:gt(3)').remove()