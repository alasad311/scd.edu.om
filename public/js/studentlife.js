$('#youtube').spidochetube({
    key: 'AIzaSyA9rZM21K8RgBykws3WbxcbSI5AnKe8shs',
    id: 'PL4ZB_gSvNQps3eywP278cJ1q0bM-HFlKx', // add the youtube playlist id of your choice
});
if(window.location.hash){
    console.log(window.location.hash)
        $('.nav-item a[href="' + window.location.hash + '"]').tab("show")
  }