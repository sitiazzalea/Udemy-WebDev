// $("h1").addClass("big-title margin-50");
// $("h1").text("Bye");
// $("h1").click(function() {
//     $("h1").css("color", "purple");
// });
// for (var i = 0; i <= 5; i++) {

// }
// $("button").click(function() {
//     $("h1").css("color", "purple");
// });

// $(document).keydown(function(event){
//     // console.log(event.key);
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple");
// });

// $("button").on("click", function(){
//     $("h1").hide();
// });

// $("button").on("click", function(){
//     $("h1").fadeOut();
// });

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5, margin: "20%"});
});