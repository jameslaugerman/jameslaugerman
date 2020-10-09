var target = $('.hideme'),
    targetHeight = target.outerHeight();

$(document).scroll(function(e) {
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;

    if (scrollPercent >= 0) {
        target.css('opacity', 1 - scrollPercent);
    }
});