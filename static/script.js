// var item1 = document.getElementById("item-1");
// item1.style.backgroundColor = green;
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
$("#checker").css({ "visibility": "visible"});  
function graphFull(){
var check = document.getElementById("checker")

if(check.style.visibility == 'visible')
{
document.getElementById("countryDrop").innerHTML = "<center> <img src=static/items_1.20.1/map.png/>";
document.getElementById("yearDrop").innerHTML = "<center> <img src=static/items_1.20.1/clock.png/>";
// const m = document.getElementById("countrylist")
// for (const child of m.children)
// {
//     child.href=child.href.slice(0,-5) + "true"
// }

$("img").css({"width" : "75px"});
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

}
else
{
    document.getElementById("countryDrop").innerHTML = "Country";
document.getElementById("yearDrop").innerHTML = "Year";
$(".item-2").css({ "grid-row": "1 / 3",
"grid-column": "5 / 7"});
$(".item-2").css({ "grid-template-rows": "repeat(9, 8%)",
"grid-template-columns": "repeat(9, 8%)", "grid-gap": ".7em"});
$(".test").css({ "grid-row": "3 / 10",
"grid-column": "1 / 10"});
$(".test2").css({ "grid-row": "1 / 3",
"grid-column": "1 / 8"});
$(".test3").css({ "grid-row": "1 / 3",
"grid-column": "8 / 10"});
$(".fullmc").css({
    "width" : "30px"
})
$(".item").css({ "visibility": "visible"});
$(".item-2").css({ "visibility": "visible"});
$(".test").css({ "visibility": "visible"});
$(".test2").css({ "visibility": "visible"});
$(".test3").css({ "visibility": "visible"}); 
$(".gif").css({ "width": "331px",
"height": "160px"});

}
// $(".container").css({ "visibility": "visible"});
// $(".container").css({ "background-color": "yellow"});
}
$(document).ready(function(){
if(localStorage.getItem('full') == 'true')
{
    graphFull();
}
$("#full").click(
function()
{
    graphFull();
    if(localStorage.getItem('full')  == 'false')
    {
        localStorage.setItem('full', 'true')
    }
    else
    {
        localStorage.setItem('full', 'false')
    }
    
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
});
// document.addEventListener("DOMContentLoaded", function(event)
// {
//     something();
// });
function something()
{

    localStorage.setItem('full', 'true')
    
    // localStorage.removeItem('year')
}

// $("#full").onclick = function(){graphFull();};

