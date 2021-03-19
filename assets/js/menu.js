$(document).ready(function() {                       //run when the DOM is ready
  $(".nav > div > div > div").click(function() {  //use a class, since your ID gets mangled
    $(".line").css("width","0%");      //add the class to the clicked element
  });
});
