$(document).ready(function() {
    $(".main").each(function() {
        $(this).click(function() {
            var audio = new Audio('../static/audio/kr-m-zy-' + $(this).attr('id') + '.mp3');
            audio.volume = 0.2;
            audio.play();
        });
    });
});