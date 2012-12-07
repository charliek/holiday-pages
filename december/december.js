$(function() {
    colorHeadline();
});


function colorHeadline() {
    var updateSpeed = 400;
    var holidayText = '';
    var $message = $('#the_message');
    var holidayText = $message.html();
    var colorClasses = ['green', 'red'];

    $message.html('');
    for (var i = 0; i < holidayText.length; i++) {
        var $newSpan = $('<span/>').html(holidayText[i]).addClass('uncolored').addClass(colorClasses[i % colorClasses.length]);
        $message.append($newSpan);
    }
    var updateColors = function(){
        var $letters = $('#the_message .uncolored');
        var random_elem = Math.floor(Math.random() * $letters.length);
        var $span = $letters.eq(random_elem);

        $span.removeClass('uncolored');
        if($letters.length > 1) {
            setTimeout(updateColors, updateSpeed);
        }
    }
    setTimeout(updateColors, updateSpeed);
}

