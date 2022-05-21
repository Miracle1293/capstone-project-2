$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

function validform() {

        var a = document.forms["my-form"]["email-address"].value;
        var b = document.forms["my-form"]["username"].value;
        var c = document.forms["my-form"]["phone-num"].value;
        var d = document.forms["my-form"]["pswd"].value;
        var e = document.forms["my-form"]["confirm-pswd"].value;

        if (a === null || a === "") {
            alert("Please Enter Your Email Address");
            return false;
        } else if (b === null || b === "") {
            alert("Please Enter Your Username");
            return false;
        } else if (c === null || c === "") {
            alert("Please Enter a correct Phone Number");
            return false;
        } else if (d === null || d === "") {
            alert("Please Enter Your Password");
            return false;
        } else if (e === null || e !== d) {
            alert("Please Enter Your Correct Password");
            return false;
        }

    }