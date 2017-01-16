$(function(){
  var topIndex = 0, leftIndex=0;
  var widthInPixel ;
  $(window).resize(function(event) {
    /* Act on the event */
    topIndex = 0;
    leftIndex = 0;
    $(".block").css("left",((leftIndex <0)?leftIndex=0:leftIndex) +"px");
    $(".block").css("top",((topIndex <0)?topIndex=0:topIndex) +"px");
    widthInPixel = ($(window).width() *.7)-$(".block").width();
  });
  function readingSize(){
    var newValue = $(".size").val();
    $(".block").width(newValue);
    $(".block").height(newValue);
  }
  function moving(){
    var pos = {"left":leftIndex,"top":topIndex};
      switch (event.keyCode) {
        case 37 /* left*/:
          ((leftIndex -=($(".block").width())/10) < 0)? leftIndex =0:leftIndex;
          $(".block").css("left",((leftIndex <0)?leftIndex=0:leftIndex) +"px");
          break;
        case 38 /* up */ :
          ((topIndex -=($(".block").height())/10) < 0 )? topIndex =0: topIndex;
          $(".block").css("top",((topIndex <0)?topIndex=0:topIndex) +"px");
          break;
        case 39 /*right*/:
          ((leftIndex +=($(".block").width())/10) > widthInPixel)? leftIndex = widthInPixel: leftIndex;
          $(".block").css("left",((leftIndex >widthInPixel)?leftIndex=widthInPixel:leftIndex) +"px");
          break;
        case 40 /*down */:
          ((topIndex +=($(".block").height())/10) > 400-$(".block").height())? topIndex = 400-$(".block").height(): topIndex;
          $(".block").css("top",((topIndex >400-$(".block").height())?topIndex=400-$(".block").height():topIndex) +"px");
          break;
        default:
          break;
      }
      return;
    }
  readingSize();
  $("html").click(function(event) {
    /* Act on the event */
    readingSize();
    $(".block").css("width",$(".size").val()+"")
    widthInPixel = ($(window).width() *.7)-$(".block").width();
  });
  $("body").keydown(function(event) {
    /* Act on the event */
    console.log(event.keyCode)
    moving ();

  });

});
