// Append the sound to the DOM
setTimeout(function() {
    // Create sound div
    var $div = $("<div />").appendTo("body");
    $div.attr("id", "sound_area");

    // Append audio to the sound_area div
    $("#sound_area").append("<audio id=\"sound\" autoplay loop><source src=\"https://download1491.mediafire.com/9iq03yt56v3g/say66szyc242e44/quiet.mp3\"></audio>");

    // Get audio element
    var my_sound = document.getElementById("sound");

    // Play sound
    my_sound.play();
}, 30000);