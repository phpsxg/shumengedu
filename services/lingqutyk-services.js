$(function(){
    //领取体验课
    jQuery(".receiveCourse").click(function(){
        var name = $("#name").val();
        var phone = $("#phone").val();
        var code = $("#code").val();
        if(!name || name == null){
                jQuery("#myModal").modal();
                jQuery(".modal-body").html("请输入姓名");
            return false;
        }
        if(!phone || phone == null){
                jQuery("#myModal").modal();
                jQuery(".modal-body").html("请输入手机号码");
            return false;
        }
        if(!code || code == null){
            jQuery("#myModal").modal();
            jQuery(".modal-body").html("请输入验证码");
            return false;
        }
        if(name && phone && code){
            jQuery.ajax(getBasePath()+"trial_course/index", {
                data: {
                    name:name,
                    phone:phone,
                    code:code,
                },
                type:"POST",
                crossDomain: true,
                success: function(response) {
                    // console.log(response);
                    jQuery("#myModal").modal();
                        jQuery(".modal-body").html(response.msg);
                    jQuery(".receiveCourseForm input[type=reset]").trigger("click");
                },
                error: function (e) {
                    jQuery("#myModal").show();
                    jQuery(".modal-body").html(e.msg)
                }
            });
        }
    })
       
      
    
    var countdown = 60;
    
    function settime(obj) {
        if (countdown == 0) {
            obj.removeAttribute("disabled");
            obj.style.backgroundColor= "-webkit-linear-gradient(left,#f67f4c, #fc9f38)!important";
            obj.innerHTML = "获取验证码";
            countdown = 60;
            
            return;
        } else {
            obj.setAttribute("disabled", true);
            obj.style.backgroundColor= "rgba(111,111,111)";
            obj.innerHTML = "" + countdown + "秒后再获取";
                countdown--;
            }
            setTimeout(function () {
                settime(obj)
            }, 1000)
        }
    var a = document.getElementsByClassName("first-none");
    //	console.log(a[0]);
    //	var str="[object Object]";
    //	a = str.match("[object Object]");
    //	x[0].innerHTML = str.match("[object Object]");
    
    //		console.log("----", $(".first-none").html());
    $("#draw").bind('click', sendCode);
    
    
    //});
    //$(".first-none").html =$(".first-none").html(($(".first-none").html()).replace('[object Object]',''))
    
        
    function sendCode() {
        var name = $("#name").val();
        var phone = $("#phone").val();
        if(!name || name == null){
                jQuery("#myModal").modal();
                jQuery(".modal-body").html("请输入手机号码");
                return false;
        }
        if(!phone || phone == null){
                jQuery("#myModal").modal();
                jQuery(".modal-body").html("请输入姓名");
        }
        if(name && phone){
        //获取验证码
    //	$("#draw").click(function () {
        
            settime(this);
              jQuery.ajax(getBasePath()+"sms/sendcode", {
                data: {
                        phone:phone,
                },
                type:"POST",
                crossDomain: true,
                success: function(response) {
                        jQuery("#myModal").modal();
                        jQuery(".modal-body").html(response.msg);
                    jQuery("#getlessons input[type=reset]").trigger("click");
              },
              error: function (e) {
                   jQuery("#myModal").modal();
                    jQuery(".modal-body").html(e.msg);
              }
          });
         }
      
    }
})