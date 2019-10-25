function begin() {
    $('#bio-scroll').on('click', e => {
        $(window).scrollTop($("#bio").offset().top);
    })

    $('#work-scroll').on('click', e => {
        $(window).scrollTop($("#work").offset().top);
    })

    $('#contact-scroll').on('click', e => {
        $(window).scrollTop($("#contact-info").offset().top);
    })
}
$(begin)