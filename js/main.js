$(window).scroll(function() {
	    $('.infoation .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();

	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__jackInTheBox animate__delay-0s");
	            $(this).addClass("visibility");
	        }
	    });
});
$(window).scroll(function() {
	    $('.infoation .time').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();

	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__lightSpeedInLeft animate__delay-1s");
	            $(this).addClass("visibility");
	        }
	    });
});
$(window).scroll(function() {
    $('.infoation .palm').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__zoomIn animate__delay-1s");
            $(this).addClass("visibility");
        }
    });
});
$(window).scroll(function() {
    $('.infoation .rocket').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__lightSpeedInRight animate__delay-1s");
            $(this).addClass("visibility");
        }
    });
});
$(window).scroll(function() {
    $('.form .section-title').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__zoomInDown animate__delay-0s");
            $(this).addClass("visibility");
        }
    });
});
$(window).scroll(function() {
    $('.form-input').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__zoomIn animate__delay-1s");
            $(this).addClass("visibility");
        }
    });
});
$(window).scroll(function() {
    $('.footer').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("animate__zoomIn animate__delay-1s");
            $(this).addClass("visibility");
        }
    });
});

