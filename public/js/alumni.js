if($(".rotate2").length > 0)
{
    $(".rotate2").textrotator({
        animation: "flipCubeUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 2000 // How many milliseconds until the next word show.
      });

}
    $('.owl-carousel').owlCarousel({
        items: 1, 
        margin: 100,
        loop: true,
        nav: true,
        stagePadding: 100,
        autoHeight: true
    })
$(".alumni-circle").on('click',function(){
    var target = $(this).attr("data-target");
    switch(target)
    {
        case "followus":
            window.open("https://www.instagram.com/alumniclub_scd/?hl=en", '_blank');
            break;
        case "stayconnected":
            window.open("https://api.whatsapp.com/send?phone=96871970009&text=Hello%2C%20i%20would%20like%20to%20join%20SCD%20Alumni%20Club.", '_blank');
            break;
        case "emailus":
            window.location.href   = "mailto:alumni.club@scd.edu.om"
            break;
    }
  
  })
  if(window.location.hash){
    console.log(window.location.hash)
        $('.nav-item a[href="' + window.location.hash + '"]').tab("show")
  }