function onViewport(el, elClass, offset, callback) {
    /*** Based on http://ejohn.org/blog/learning-from-twitter/ ***/
    var didScroll = false;
    var this_top;
    var height;
    var top;

    if (!offset) {
        var offset = 0;
    }

    $(window).scroll(function () {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            didScroll = false;
            top = $(this).scrollTop();

            $(el).each(function (i) {
                this_top = $(this).offset().top - offset;
                height = $(this).height();

                // Scrolled within current section
                if (top >= this_top && !$(this).hasClass(elClass)) {
                    $(this).addClass(elClass);

                    if (typeof callback == "function") callback(el);
                }
            });
        }
    }, 100);
}

// onViewport(".line", "agent2", 1000, function() {
//     console.log("This is not a drill.")
// });
//
// onViewport(".title", "agent4", 1000, function() {
//     console.log("This is not a drill.")
// });

// onViewport(".text", "agent6", 1000, function() {
//     console.log("This is not a drill.")
// });
//
// onViewport(".client_item", "agent3", 1000, function() {
//     console.log("This is not a drill.")
// });
//
// onViewport(".rounded-circle", "agent4", 1000, function() {
//     console.log("This is not a drill.")
// });