
$(document).ready(function() {

    $('#review-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<span class='pe-7s-angle-left'></span>", "<span class='pe-7s-angle-right'></span>"],
        items: 1
    })
    $("form").submit(function() {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function(data) {
                $('.modal').modal('hide');
                $('body').css('padding-right', '0');
                $('#modal-thank').modal('show');
            },
            error: function(jqXHR, text, error) {
                $(formNm).html(error);
            }
        });
        return false;
    });
    jQuery(function($) {
        $(".phone-mask").mask("+8 (999) 999-99-99");
    });
    $(".animate-scroll").click(function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 56
        }, 1500);
    });

        $('#menu-btn').click(function(){
            $(this).toggleClass('open');
            $('body').toggleClass('open-menu');
        });
});