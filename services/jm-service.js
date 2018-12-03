$(function(){
    var baseUrl = 'https://api.shumengedu.com/';
    //加盟申请表
    $("#submitApplication").click(function(){
//      console.log($("#joinApplication").serialize(),);
        $.ajax(baseUrl+"join/index", {
            data: $("#joinApplication").serialize(),
            type:"POST",
            crossDomain: true,
            success: function(response) {
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
    $("#submitApplicationTwo").click(function(){
        //      console.log($("#joinApplication").serialize(),);
        $.ajax(baseUrl+"join/index", {
            data: $("#joinApplicationTwoForm").serialize(),
            type:"POST",
            crossDomain: true,
            success: function(response) {
                $("#myModal").show();
                $(".modal-body").html(response.msg)
                $("#joinApplicationTwoForm input[type=reset]").trigger("click");
            },
            error: function (e) {
                $("#myModal").show();
                $(".modal-body").html(e.msg)
            }
        });
    })
    
})
