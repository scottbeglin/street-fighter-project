/*everything is loaded on page load (inside the document ready)*/
$(document).ready(function () {


    /*on page load —> display the default state --> show ryu-still (and hide everythying else)*/
    $('.ryu-action').hide(); //(this line means hide all 4 divs)
    /* is replacing ...
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
    */
    $('.ryu-still').show();



    /*on mouse over 
        		—> mouseenter—> display ryu-ready (and hide everythying else)*/
    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-ready').show();
    });

    /*	—> mouseleave —> display the default state --> ryu-still (and hide everythying else)*/
    $('.ryu').mouseleave(function () {
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-still').show();
    });




    /*on click 
    		—> mousedown —> display ryu-throwing (and hide everythying else)*/
    $('.ryu').mousedown(function () {
        playHadouken();
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                'left': '300px'
            },
            500,
            function () {
                $(this).stop();
                $(this).hide();
                $(this).css('left', '-212px');
            }
        );
    });

    /*	—> mouseup —> display the default state --> ryu-still (and hide everythying else)*/
    $('.ryu').mouseup(function () {
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-still').show();
    });



    /*on key press 
        		—> keydown —> display ryu-cool (and hide everythying else)*/
    $(document).keydown(function (key) {
        //keyCode == 88 is the X key
        if (key.keyCode == 88) {
            $('.ryu-action').hide(); //(this line means hide all 4 divs)
            $('.ryu-cool').show();
            playCool()
        }
    });

    /*	—> keyup —> display the default state --> ryu-still (and hide everythying else)*/
    $(document).keyup(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-action').hide(); //(this line means hide all 4 divs)
            $('.ryu-still').show();
            $('#cool')[0].pause();
        }
    });


    //close document ready	

});

/*how to play a sound */
var hadoukenSound = false;

function playHadouken() {
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $('#hadouken-sound')[0].volume = 0.5; //set the volume (0 => 0% and 1 => 100%; so 0.5 is 50%)
        $('#hadouken-sound')[0].load(); //load the sound into the memory
        $('#hadouken-sound')[0].play(); //play it
    }
}

var coolSound = false;

function playCool() {
    coolSound = !coolSound;
    if (coolSound) {
        $('#theme-song')[0].pause();
        // $('#cool')[0].load()
        $('#cool')[0].play();
    }
}

function playthemesong() {
    $('#theme-song')[0].volume = 0.3;
    $('#theme-song')[0].play();
}
