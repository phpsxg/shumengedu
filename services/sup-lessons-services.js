var basePath = 'https://api.shumengedu.com/';
jQuery(function(){
	getUrlPara();
	//领取体验课
    jQuery("#ImmediatelySubmit").click(function(){
        //    console.log(jQuery("#joinApplication").serialize(),);
        jQuery.ajax(basePath+"trial_course/indexWithoutCode", {
            data: {
            		name:jQuery("#name").val(),
            		phone:jQuery("#phone").val(),
            },
            type:"POST",
            crossDomain: true,
            success: function(response) {
                jQuery("#myModal").modal();
        			jQuery(".modal-body").html(response.msg);
                jQuery("#ImmediatelySubmit input[type=reset]").trigger("click");
            },
            error: function (e) {
                jQuery("#myModal").modal();
        			jQuery(".modal-body").html(e.msg);
            }
        });
    })
})
function getUrlPara(){  
    var url = document.location.toString();
　　 var arrUrl = url.split("?type=");
　　 var para = arrUrl[1];
    // console.log(para);
    if(para =1){
    		$("#supLessonsTitle").html("<span class='font-36' style=''>预约试听</span>");
    }
    if(para =2){
    		$("#supLessonsTitle").html("<span class='font-28' style='line-height:35px'>现在留言，即可<span class='c-blue-purple'>免费</span>获取课程体验包</span>");
	}　　 
return para;
}
