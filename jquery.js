$(document).ready(function(){
    $("#submit").css("color", "blue")
    $("#fabian li:last").css("color", "white")
    

    $("ul#fabian li:odd").css("background-color", "red");
    $("ul#fabian li:even").css("background-color", "green");

    $("#fabian li").css("list-style", "none")
})