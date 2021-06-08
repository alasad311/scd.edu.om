$(".undergraduate").on('click',function(){
    $("#step-1-programs").fadeOut("slow",function(){
      $("#step-2-undergraduate").fadeIn(function(){
        $("#step-2-undergraduate").css("display","flex")
      });
    })
  })
  $(".postgraduate").on('click',function(){
    $("#step-1-programs").fadeOut("slow",function(){
      $("#step-2-postgraduate").fadeIn(function(){
        $("#step-2-postgraduate").css("display","flex")
      });
    })
  })
  $(".shortcourses").on('click',function(){
    $("#step-1-programs").fadeOut("slow",function(){
      $("#step-2-short-courses").fadeIn(function(){
        $("#step-2-short-courses").css("display","flex")
      });
    })
  })
  $(".probackstep").on('click',function(){
    var target = $(this).attr("data-self");
    console.log(target)
    $("#step-2-"+target).fadeOut("slow",function(){
      $("#step-1-programs").fadeIn();
    });
  })
  $(".program").on('click',function(){
    var step2Id = $(".programs").not(":hidden").prop("id");
    var majorid = ($(this).attr("data-major")) ? $(this).attr("data-major") : null;
    var shortid = $(this).attr("data-shortcourse");

    if(majorid)
    {
        $("#selectOption").val(majorid);
    }
    else
    {
        $("#selectOption").val(shortid); 
    }

    $("#"+step2Id).fadeOut("slow",function(){
      $("#final-step").fadeIn();
    });
  })


