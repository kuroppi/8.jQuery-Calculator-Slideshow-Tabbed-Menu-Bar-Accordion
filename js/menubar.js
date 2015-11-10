//A jQuery Tabbed Menu Bar (10 points)

$(document).ready(function () {
    $("li").click(function (e) {
        $(this).css("background-color", "white");
        $("li").not(this).css("background-color", "lightgray");
        if (e.target.id === "tab-1") {
            $("#text-1").css("display", "block");
            $("#text-2, #text-3, #text-4").css("display", "none");
        } else if (e.target.id === "tab-2") {
            $("#text-2").css("display", "block");
            $("#text-1, #text-3, #text-4").css("display", "none");
        } else if (e.target.id === "tab-3") {
            $("#text-3").css("display", "block");
            $("#text-1, #text-2, #text-4").css("display", "none");
        } else if (e.target.id === "tab-4") {
            $("#text-4").css("display", "block");
            $("#text-1, #text-2, #text-3").css("display", "none");
        }
    });
});
