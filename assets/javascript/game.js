// A game with 4 crystals and Random Result

var random_result;
var lost;
var win;
var previous = 0;

// A game with 4 crystals and Random Result

var resetAndStart = function () {

    $(".crystals").empty();
// crystal images
    var images = [
        'https://www.thespruce.com/thmb/eCV4tmDVBHVIP2jUfgiar9Z0m04=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/rare-rose-quartz-crystals-set-in-massive-rose-quartz-close-up-72194997-57ed39f95f9b586c35c63b6b.jpg', 
        'https://estore.eclipse.net.uk/WebRoot/Eclipse/Shops/thecrystalhealer/5470/A117/5364/C383/74EE/0A33/658A/F448/Titanium-quartz-13_m.jpg', 
        'https://tse3.mm.bing.net/th?id=OIP.TWeGboRArXKyp-o4aUbgOgHaHa&pid=Api&P=0&w=300&h=300"/',
        'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FCvSJdmpSb2NL0a4gThE88w%2Flarger.jpg&width=1200&quality=80',
        ];

    random_result = Math.floor(Math.random() * 101) + 19; 

// Every crystal needs to have random number between 1-12

    $("#result").html('Match Number: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
                
            });

        $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score: " + previous);
}

resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function () {

     var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > random_result) {

        lost++;

        $("#lost").html("You Lost: " + lost);

        previous = 0;

        resetAndStart();

    } else if(previous === random_result) {
        win++;

        $("#win").html("You Win: " + win);

        previous = 0;

        resetAndStart();
    }

    console.log(previous);

});






