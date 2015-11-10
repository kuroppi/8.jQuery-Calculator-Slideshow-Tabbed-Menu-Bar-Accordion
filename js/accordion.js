// A jQuery Accordion(10 points)
 
 $(document).ready(function () {
     $("#faqs h2").click(function () {
         $(this).css({
             "background-color": "#9AA939",
             "border-bottom-left-radius": "0",
             "border-bottom-right-radius": "0"
         });
         $(this).toggleClass("minus");
         if ($(this).attr("class") != "minus") {
             $(this).next().slideUp(500);
             $(this).css({
                 "background-color": "#298975",
                 "border-bottom-left-radius": "15px",
                 "border-bottom-right-radius": "15px"
             });
         } else {
             $(this).next().slideDown(500);
             $(this).not(this).css("background-color", "#298975");
         }
     });
 });
