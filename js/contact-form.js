// JavaScript Document
$(document).ready(function() {

    "use strict";

    $(".rr__contact-form").submit(function (e) {
        e.preventDefault();

        console.log('contact form')
        var name = $(".contact-name").val();
        var firma = $(".contact-firma").val();
        var phone = $(".contact-phone").val();
        var email = $(".contact-email").val();
        var msg = $(".contact-message").val();
        var agree = $(".contact-agree")[0].checked;

        if (name != '' && agree == true && email != '' && msg != '') {
            console.log('send')
            var dataString = "name=" + name + "&firma=" + firma + "&phone" + phone + "&email=" + email + "&msg=" + msg;
            $(".contact-loading").fadeIn("slow").html("Wird geladen...");
            $.ajax({
                type: "POST",
                data: dataString,
                url: "contact.php",
                cache: false,
                success: function (d) {
                    //$(".form-control").removeClass("success");
                    if (d == 'success') {
                        $('.contact-loading').fadeIn('slow').html('<font color="#48af4b">Mail erfolgreich gesendet.</font>').delay(5000).fadeOut('slow');
                    } else {
                        $('.contact-loading').fadeIn('slow').html('<font color="#ff5607">Mail nicht gesendet.</font>').delay(5000).fadeOut('slow');
                    }

                    $(".contact-name").val('');
                    $(".contact-firma").val('');
                    $(".contact-phone").val('');
                    $(".contact-email").val('');
                    $(".contact-message").val('');
                    $(".contact-agree")[0].checked = false;
                }
            });
            return false;
        }

        $("#reset").on('click', function () {
            $(".form-control").removeClass("success").removeClass("error");
        });

    });

});



