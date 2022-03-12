function closeNav() {
    document.getElementById("mySidebar").style.width = 'auto';
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySidebar").style.backgroundColor = "#3939398a";
}

function extendNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySidebar").style.backgroundColor = "#35302f";
    document.getElementById("mySidebar").style.fontSize = "15px";

}



$('.closebtn').click(function() {
    $('.openbtn').show();
    $('.closebtn').hide();
});

$('.openbtn').click(function() {
    $('.closebtn').show();
    $('.openbtn').hide();
});



$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});