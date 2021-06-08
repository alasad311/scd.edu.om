$(".exhibition-circle").on('click',function(){
    var target = $(this).attr("data-target");
    switch(target)
    {
        case "upcomingexhibition":
            document.getElementById('latestExhibition').click();
            break;
        case "getinformed":
            $('#formModal').modal('show')
            break;
        case "exhibityourwork":
            document.getElementById('btn_app').click();
            break;
    }
  
  })

  flag = false,
  duration = 300;
  if(window.location.hash){
    console.log(window.location.hash)
        $('.nav-item a[href="' + window.location.hash + '"]').tab("show")
  }
$('.thumb-gallery-detail')
  .owlCarousel({
      items: 1,
      margin: 10,
      nav: true,
      video:true,
      dots: false,
      loop: false,
      autoHeight: true,
      navText: [],
      rtl: ( $('html').attr('dir') == 'rtl' ) ? true : false
  })
  .on('changed.owl.carousel', function(e) {
      if (!flag) {
          flag = true;
          $('.thumb-gallery-thumbs').trigger('to.owl.carousel', [e.item.index-1, duration, true]);

          $('.thumb-gallery-thumbs').find('.owl-item').removeClass('selected');
          $('.thumb-gallery-thumbs').find('.owl-item').eq( e.item.index ).addClass('selected');
          flag = false;
      }
  });


$('.thumb-gallery-thumbs')
  .owlCarousel({
      margin: 15,
      items: $(this).data('thumbs-items') ? $(this).data('thumbs-items') : 4,
      nav: false,
      center: $(this).data('thumbs-center') ? true : false,
      dots: false,
      rtl: ( $('html').attr('dir') == 'rtl' ) ? true : false
  })
  .on('click', '.owl-item', function() {
      $('.thumb-gallery-detail').trigger('to.owl.carousel', [$(this).index(), duration, true]);
  })
  .on('changed.owl.carousel', function(e) {
      if (!flag) {
          flag = true;
          $('.thumb-gallery-detail').trigger('to.owl.carousel', [e.item.index, duration, true]);
          flag = false;
      }
  });

$('.thumb-gallery-thumbs').find('.owl-item').eq(0).addClass('selected');