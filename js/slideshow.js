        //            A jQuery Image Selection Slideshow (10 points)

        $(document).ready(function () {
            $("a").css("color", "black");
            $("img").css({
                "border": "solid 1px black",
                "width": "100%",
                "max-width": "1280px"
            });
            $("ul#image_list li").css("display", "inline-block");

            $("ul#image_list li a").css({
                "text-decoration": "none",
                "font-family": "impact",
                "font-size": "20px",
                "font-weight": "bold",
                "padding-left": "5px",
                "padding-right": "5px"
            });

            $("#default").css("text-decoration", "underline");
            $("#default a").css("color", "blue");

            $("#image_list a").each(function () {
                var swappedImage = new Image();
                swappedImage.src = $(this).attr("href");
            });

            $("#image_list a").click(function (e) {
                var imageURL = $(this).attr("href");
                $("#image").attr("src", imageURL);
                e.preventDefault();
                $("#default").css("text-decoration", "none");
                $(this).css({
                    "text-decoration": "underline",
                    "color": "blue"
                });
                $("ul#image_list li a").not(this).css({
                    "text-decoration": "none",
                    "color": "black"
                });
            });
        });
