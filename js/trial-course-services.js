$(function(){
    //领取体验课
    $("#submitApplication").click(function(){
        // console.log($("#joinApplication").serialize(),);
        $.ajax(baseUrl+"trial_course/index", {
            data: $("#joinApplication").serialize(),
            type:"POST",
            crossDomain: true,
            success: function(response) {
                // console.log(response);
                $("#myModal").show();
                $(".modal-body").html(response.msg)
                $("#joinApplication input[type=reset]").trigger("click");
            },
            error: function (e) {
                $("#myModal").show();
                $(".modal-body").html(e.msg)
            }
        });
    })
    
})