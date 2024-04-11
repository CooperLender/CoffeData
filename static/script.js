// var item1 = document.getElementById("item-1");
// item1.style.backgroundColor = green;
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

function graphFull(){
$(".item-2").css({ "grid-row": "1 / 5",
"grid-column": "1 / 7"});
$(".item-2").css({ "grid-template-rows": "repeat(8, 80px)",
"grid-template-columns": "repeat(12, 80px)", "grid-gap": "1.5em"});
$(".test").css({ "grid-row": "3 / 7",
"grid-column": "2 / 10"});
$(".test2").css({ "grid-row": "1 / 3",
"grid-column": "3 / 9"});
$(".test3").css({ "grid-row": "1 / 2",
"grid-column": "9 / 10"});
$(".fullmc").css({
    "width" : "50px"
})
$(".item").css({ "visibility": "hidden"});
$(".item-2").css({ "visibility": "visible"});
$(".test").css({ "visibility": "visible"});
$(".test2").css({ "visibility": "visible"});
$(".test3").css({ "visibility": "visible"});
// $(".container").css({ "visibility": "visible"});
// $(".container").css({ "background-color": "yellow"});
}
$(document).ready(function(){
$("#full").click(
function()
{
    graphFull();
});
});
// $("#full").onclick = function(){graphFull();};

