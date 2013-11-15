$(function() {
    shakeTheTurkey();
});

function shakeTheTurkey() {
    $('#turkey_pan').hide('shake', 1000, function() {
        $('#turkey_pan').show(
            'shake', 
            1000, 
            setTimeout('makeTheTurkeySayGobble();', 500)
        );
    });
}

function makeTheTurkeySayGobble() {
    /* Todo... */
    setTimeout('shakeTheTurkey();', 500)
}
