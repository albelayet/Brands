$(document).ready(function(){


    $(".js-stiky").waypoint(function(direction){
        if(direction == "down") {
            $("nav").addClass("stiky");
        } else {
            $("nav").removeClass("stiky");
        }
    });


});



function openNav() {
    document.getElementById("my-nav").style.width = "100%";
}
function closeNav() {
    document.getElementById("my-nav").style.width = "0%";
}

