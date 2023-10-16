$(document).ready(function () {
    $('td').not("td:first-child")
        .click(function () {

            var content = $(this).text();
            var cliffs = ['West Cliff', 'North Cliff', 'East Cliff', 'South Cliff']
            var index = $(this).index() - 1;
            
            if (content != "Not Available") {
                $(this).toggleClass("tdhighlight");

                if ($(this).hasClass("tdhighlight")) {
                    // Highlight selected cell
                    $(this).css("background-color", "#9ed034");
                    $(this).css("color", "white");

                    // Display box and add current cell to the box
                    $("#displaySelected").css("visibility", "visible");
                    $("#displaySelected").css("margin-top", "2em");
                    $("#result").append("<p>" + content + " at " + cliffs[index] + " </p>");

                } else {
                    // Remove cell highlight
                    $(this).css("background-color", "rgba(0, 0, 0, 0)");
                    $(this).css("color", "black");

                    // Remove current cell from the box
                    $('#result p:contains(' + content + ')').remove();
                    if ($('#result').has('p').length == false) {
                        $("#displaySelected").css("visibility", "hidden");
                        $("#displaySelected").css("margin-top", "0");
                    }
                }
            }
        }
        )
        .mouseenter(function () {
            if ($(this).text() != "Not Available") {
                $(this).css({ "cursor": "pointer" });
            }
        })

});