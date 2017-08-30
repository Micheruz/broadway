$( document ).ready(function() {
  var about = $(".abtTxt");
  var dogDisplay = $(".abtDisplay2 img");
  var welcome = $(".welcome h1");
  var welBtn = $(".welcome a");
    dogDisplay.height(about.outerHeight());

    $(window).on('resize', function(){

      dogDisplay.height(about.outerHeight());
    });
    welcome.fadeIn(1000).css("display","block");
welBtn.fadeIn(750).css("display","inline-block");

});
