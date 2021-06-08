$(".contact-us-circle").on('click',function(){
    var target = $(this).attr("data-target");
    $("#step-1").fadeOut("slow",function(){
      $("#step-2-"+target).fadeIn();
    });
})
$(".backstep1").on('click',function(){
    var step2Id = $(".step-2").not(":hidden").prop("id");
    $("#"+step2Id).fadeOut("slow",function(){
      $("#step-1").fadeIn();
    })
})
$(".nextstep3").on('click',function(){
    var step2Id = $(".step-2").not(":hidden").prop("id");
    $("#"+step2Id).fadeOut("slow",function(){
        $("#step-3").fadeIn();
    })
})
$(".backstep2").on('click',function(){
    $("#step-3").fadeOut("slow",function(){
        $("#step-1").fadeIn();
    })
})
$(".backstep3").on('click',function(){
    $("#step-4").fadeOut("slow",function(){
        $("#step-1").fadeIn();
    })
})

$(".nextstep4").on('click',function(){
// var step2Id = $(".step-3").not(":hidden").prop("id");
    $(".step-3").fadeOut("slow",function(){
        $("#step-4").fadeIn();
    })
})
$(".admission-circles").on('click',function(){
    var target = $(this).attr("data-target");
    switch(target)
    {
        case "programs":
            window.open("/programs", '_blank');
            break;
        case "booktour": 
            window.location.href   = "#booktour"
            break;
        case "callback":
            $('#formModal').modal('show')
            break;
    }

})


if(window.location.hash){
    console.log(window.location.hash)
    $('.nav-item a[href="' + window.location.hash + '"]').tab("show")
}