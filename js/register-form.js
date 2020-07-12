// JavaScript Document

$(document).ready(function() {

    "use strict";

    $(".register-form").submit(function(e) {
        e.preventDefault();
        $(".phone-or-email").addClass('d-none');

        var name = $(".name");
        var email = $(".email");
        var phone = $(".phone");
        var agree = $('.agree');

        if (name.val() != '' && agree[0].checked == true && email.val() != '' || phone.val() != '') {
            var dataString = "name=" + name.val() + "&email=" + email.val() + "&phone=" + phone.val();
            $(".loading").fadeIn("slow").html("Wird geladen...");
            $.ajax({
                type: "POST",
                data: dataString,
                url: "register.php",
                cache: false,
                success: function (d) {
                   // $(".form-control").removeClass("success");
                    if(d == 'success') {
                        $('.loading').fadeIn('slow').html('<font color="#48af4b">Mail erfolgreich gesendet.</font>').delay(5000).fadeOut('slow');
                    } else {
                        $('.loading').fadeIn('slow').html('<font color="#ff5607">Mail nicht gesendet.</font>').delay(5000).fadeOut('slow');
                    }

                    $(".name").val('');
                    $(".email").val('');
                    $(".phone").val('');
                    $('.agree')[0].checked = false

                }
            });
            return false;
        } else {
            if (name.val() != '' && agree.checked == true ) {
                $(".phone-or-email").removeClass('d-none');
            }
        }

    });


    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });
});




