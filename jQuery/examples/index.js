$("h1").css("color", "red");
$("h1").css("border", "10px solid black");
$("h1").addClass("big-header awful-background");
$("h1").removeClass("awful-background");
$("h1").text("Welcome to ME");

$("button").css("color", "red");
$("button").addClass("big-header awful-background");
$("button").removeClass("awful-background");
$("button").text("<em>Welcome to ME</em>");
$("button").html("<em>BUTTON-a</em>");

console.log($("img").attr("src"));
$("a").attr("href", "http://yahoo.com");


$("h1").click(function (e) {
    console.log(e);
    $("h1").css("color", "green");
});

$("button").click(function (e) {
    console.log(e);
    $("h1").css("color", "purple");
});

$("input").keypress(function (e) {
    console.log(e.key);
});

$(document).keypress(function (e) {
    $("h1").text(e.key);
});


$("h1").before("<button>Hello NEW</button>");
$("h1").after("<button>Hello NEW</button> <br>");
$("h1").prepend("<button>Hello NEW</button>");
$("h1").append("<button>Hello NEW</button>");

// $("button").remove();
// $("h1").hide();
// $("h1").show();
// $("button").click(function () { $("h1").toggle(); });
// $("button").click(function () { $("h1").fadeOut(); });
// $("button").click(function () { $("h1").fadeIn(); });
// $("button").click(function () { $("h1").fadeToggle(); });
// $("button").click(function () { $("h1").slideUp(); });
// $("button").click(function () { $("h1").slideDown(); });
// $("button").click(function () { $("h1").slideToggle(); });

// $("button").click(function () { $("h1").animate({
//     //only number values are supported
//     //not! color: blue for example
//     opacity:0.5
// }); });

$("button").click(function () { $("h1").slideUp().slideDown().animate({opacity:0.5}); });