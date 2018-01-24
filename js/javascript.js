/*smooth scrolling*/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




$("#btn_registro").click(function(e) {
    e.preventDefault();


    var place = $("#place").val();
    if(place == "")
    {
        $(".error_place").addClass("error_show");
    } else {
        $("#form1").submit();
    }


    var phone = $("#mobile_phone").val();
    if(phone == "")
    {
        $(".error_mobile_phone").addClass("error_show");
    } else {
        $("#form1").submit();
    }


    var email = $("#email").val();
    if(email == "")
    {
        $(".error_mail").addClass("error_show");
    } else {
        $("#form1").submit();
    }


    var fullname = $("#full_name").val();
    if(fullname == "")
    {
        $(".error_fullname").addClass("error_show");
    } else {
        $("#form1").submit();
    }

    var fullname = $("#name").val();
    if(fullname == "")
    {
        $(".error_name").addClass("error_show");
    } else {
        $("#form1").submit();
    }



   

});