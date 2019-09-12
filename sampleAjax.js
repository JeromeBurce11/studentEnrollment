$(document).ready(function() {
    $("form").submit(function() {
        var name = $("#name").val();
        var course = $("#course").val();
        var gmail = $("#email").val();
        // var Class = ;

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/enroll",

            data: JSON.stringify({ Class: $("#class").val(), name: name, course: course, gmail: gmail }),
            success: function(data) {
                alert(data);

            },
            error: function(error) {
                alert(error);
            }
        })
    })
})