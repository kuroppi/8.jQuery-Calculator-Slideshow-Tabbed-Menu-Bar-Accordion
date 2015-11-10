//The Calculator III (5 points)

$(document).ready(function () {
    $(":button").css({
        "height": "40px",
        "width": "40px",
        "background-color": "#afd5e3",
        "border": "groove 1px #9E9E9E",
        "border-radius": "5px",
        "margin": "2px"
    });
    $("#equal").css({
        "position": "relative",
        "left": "144px",
        "bottom": "44px"
    });
    $("#result").css({
        "width": "178px",
        "background-color": "#E7E7E7",
        "color": "black",
        "font-size": "28px",
        "text-align": "right",
        "padding-right": "5px",
        "border": "groove 2px #9E9E9E",
        "border-radius": "5px",
        "height": "35px",
        "margin-bottom": "10px"
    });

    $("div input").on("click", function () {
        $("#result").val($("#result").val() + $(this).val());
    });
    $("#equal").on("click", function () {
        $("#result").val(eval($("#result").val()));
    });
});
