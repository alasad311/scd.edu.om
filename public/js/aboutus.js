$(function() {
    $("#beforeafter").twentytwenty();
    $('.circular-bar-chart').easyPieChart({'size': 250, 'barColor': '#9CCA43','lineWidth':30,'scaleColor':false,'lineCap':'butt'});
    $(".h5-clickable").on("click",function(){
        console.log($(this).next(".nl").hasClass("display-none"))
    if($(this).next("ul").hasClass("display-none"))
    {
            $(this).next("ul").removeClass("display-none")
    }else{
        $(this).next("ul").addClass("display-none")
    }
    })
$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:50,
    nav: true,
    stagePadding: 50,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }})
    if(window.location.hash){
        console.log(window.location.hash)
            $('.nav-item a[href="' + window.location.hash + '"]').tab("show")
      }


      })
