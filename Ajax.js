$(document).ready(function(){
    $("form").submit(function(){
        var name = $("#name").val();
        var course = $("#course").val();
        var gmail = $("#email").val();
        var Class = $("#class").val();

        $.ajax({
            type : "POST",
            url : "http://localhost:8080",
          
            data : JSON.stringify({Class: Class, name:name, course: course, gmail : gmail}),
            success: function (data){
                alert(data);

            },
            error: function (error){
                alert(error);
            }
        })
    })
})