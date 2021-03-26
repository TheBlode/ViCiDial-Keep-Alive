// Append the sound to the DOM
setTimeout(function() {
    // Create sound div
    var $div = $("<div />").appendTo("body");
    $div.attr("id", "sound_area");

    // Append audio to the sound_area div
    $("#sound_area").append("<audio id=\"sound\" autoplay loop><source src=\"/agc/sounds/quiet.mp3\"></audio>");
}, 20000);