$(document).ready(function() {
    $("#owl-example").owlCarousel({
      items :3,
      navigation: true,
      navigationText:  [
      "<i class='icon-chevron-left icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>"
      ],
      pagination: true,
      responsive :true,
     autoPlay: true,
    });
  }); 
  