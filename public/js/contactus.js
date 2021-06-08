$(".contact-us-circle").on('click',function(){
    var target = $(this).attr("data-target");
    switch(target)
    {
        case "programs":
            window.location.href   = "/programs";
            break;
        case "callback":
            $('#formModal').modal('show')
            break;
        case "booktourc":
            window.location.href   = "/admission#bookatour"
            break;
        case "application":
            window.open('https://apply.scd.edu.om', '_blank');
            break;
    }
  
  })
  if(window.location.hash){
    console.log(window.location.hash)
        $('.nav-item a[href="' + window.location.hash + '"]').tab("show")
  }