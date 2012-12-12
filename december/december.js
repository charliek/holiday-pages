$(function() {
    colorHeadline();
});


function colorHeadline() {
    var updateSpeed = 400;
    var holidayText = '';
    var $message = $('#the_message');
    $message.css('position', 'relative');
    var holidayText = $message.html();
    var colorClasses = ['green', 'red'];

    $message.html('');
    for (var i = 0; i < holidayText.length; i++) {
        var $newSpan = $('<span/>').html(holidayText[i]).addClass('uncolored').addClass(colorClasses[i % colorClasses.length]);
        $newSpan.css('position', 'relative').css('top', '0px');
        $message.append($newSpan);
    }
    var updateColors = function(){
        var $letters = $('#the_message .uncolored');
        var random_elem = Math.floor(Math.random() * $letters.length);
        var $span = $letters.eq(random_elem);

        $span.removeClass('uncolored');
        if($letters.length > 1) {
            setTimeout(updateColors, updateSpeed);
        } else {
            setTimeout(bounceLetters, updateSpeed);
        }
    }
    var bounceIndex = 0;
    var bounceHeight = 40;
    var bounceLetters = function() {
        var time = 0;
        var $letters = $('#the_message span');
        $letters.each(function(i, $elem){
            setTimeout(function(){bounceLetter($elem);}, time);
            time += 100;
        });
    }

    var bounceLetter = function(elem) {
        $(elem).animate({
            top: bounceHeight * -1,
        }, 200)
        .animate({top: bounceHeight}, 400)
        .animate({top: 0}, 200);
    }

    setTimeout(updateColors, updateSpeed);
}

