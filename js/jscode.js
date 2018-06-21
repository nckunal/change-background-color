



$(document).ready(function() {
  $("#color").on("click" , function(){
    $("body").css("background-color", "red");
    //this.setAttribute("checked", "checked");
  });
  $("body").css("background-color", "red");

  $("#color2").on("click" , function(){
    $("body").css("background-color", "green");
  });
  
  $("#color3").on("click" , function(){
    $("body").css("background-color", "blue");
  });
});
