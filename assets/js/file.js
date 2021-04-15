let cl = console.log;

$(function() {
    $("#button1").on("click", function() {
        
        $("body textarea").each(function () {
            $(this).css("border", "1px solid blue");
        });

        $("body p").add("p").css("border", "1px solid red");
    })
})

$(function() {
    $("#button2").on("click", function() {
        
        $("body p:last").addClass("w3r_font_color");
    })
})