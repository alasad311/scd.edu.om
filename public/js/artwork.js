

$(".owl-carousel").each(function(index, el) {
    var containerHeight = $(el).height();
    var padding = 170; 
    $(el).find("img").each(function(index, img) {
      var w = $(img).prop('naturalWidth');
      var h = $(img).prop('naturalHeight');
      padding =  600 - Math.round(containerHeight * w / h) ;
      $(img).css({
        'width': Math.round(containerHeight * w / h) + 'px',
        'height': containerHeight + 'px'
      });
    }),
    $(el).owlCarousel({
      autoWidth: true,
      items: 1, 
      margin: 1000,
    center:true,
    loop: true,
    nav: true,
    dots: true,
    stagePadding: 100,
    });
  });
