getShumengCourse();
getCourseType();
getCourseInfo();
getTeachModel();
//数萌课程
function getShumengCourse() {
    jQuery.ajax({
        url : getBasePath()+"/course/shumengCourse",
        type : "GET",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            var smzx = ""; //定义数萌在线
            jQuery.each(response.data, function (i, item) {
                strhtml +=
                    '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">'+
                    '<a class="case-box" href="course-detail.html?id='+item.id+'" alt="" title="">'+
                    '<div class="case-thum">'+
                    '<img src="'+item.thumbnail+'" alt="'+item.title+'" title="'+item.title+'"/>'+
                    '<div class="case-name">'+
                    '<div class="icon-que"></div>'+
                    '<span>'+item.type_title+'</span>'+
                    '</div>'+
                    '</div>'+
                    '<div class="case-title">'+item.title+'</div>'+
                    '<div class="case-posi"><div class="case-describe"><span class="inner_span">'+item.description.substr(0,80)+'<span></div></div>'+
                    '</a>'+
                    '</div>'
            });
            smzx = '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">'+
                '<a class="case-box" href="" alt="" title="">'+
                '<div class="case-thum">'+
                '<img src="./img/demo-img.jpg"/>'+
                '<div class="case-name">'+
                '<div class="icon-que"></div>'+
                '<span>挑战的IG</span>'+
                '</div>'+
                '</div>'+
                '<div class="case-title">挑战的IG</div>'+
                '<div class="case-posi"><div class="case-describe"><span class="inner_span">数萌教育是中国上市公司盛通股份数萌教育是中国上市公司盛通股份数萌教育是中国上市公司盛通股份数萌教育是中国上市公司盛通股份<span></div></div>'+
                '</a>'+
                '</div>'
            jQuery("#shumengCourse").html(strhtml+smzx

            );
        },
        error: function () {
            jQuery("#shumengCourse").html(e.msg);
        }
    });
}
//课程分类
function getCourseType() {
    jQuery.ajax({
        url : getBasePath()+"course/indexCourseType",
        type : "GET",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            jQuery.each(response.data, function (i, item) {
//          	console.log(i);
//          	if(i==4 || i==5 || i==6 || i==7){
//          		strhtml +=
//              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">'+
//                  '<a class="case-box" href="javascript:void(0)" onclick="detail('+item.id+')" alt="" title="">'+
//                      '<div class="case-thum">'+
//                          '<img src="'+item.thumbnail+'" alt="'+item.title+'" title="'+item.title+'"/>'+
//                          '<div class="case-name">'+
//                          '<div class="icon-que"></div>'+
//                          '<span>'+item.keywords+'</span>'+
//                          '</div>'+
//                          '</div>'+
//                          '<div class="case-describe">'+item.description+'</div>'+
//                  '</a>'+
//              '</div>'
//          	}else {
                strhtml +=
                    '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">'+
                    '<a class="case-box" href="javascript:void(0)" onclick="detail('+item.id+')" alt="" title="">'+
                    '<div class="case-thum">'+
                    '<img src="'+item.thumbnail+'" alt="'+item.title+'" title="'+item.title+'"/>'+
                    '<div class="case-name">'+
                    '<div class="icon-que"></div>'+
                    '<span>'+item.keywords+'</span>'+
                    '</div>'+
                    '</div>'+
                    '<div class="case-title">'+item.title+'</div>'+
                    '<div class="case-posi"><div class="case-describe"><span class="inner_span">'+item.description.substr(0,80)+'</span></div></div>'+
                    '</a>'+
                    '</div>';
//             }
            });

            jQuery("#courseType").html(strhtml);
        },
        error: function (e) {
        }
    });
}
// 课程资讯
function getCourseInfo() {
    jQuery.ajax({
        url : getBasePath()+"course/courseInfo",
        type : "GET",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            var str ="";
            jQuery.each(response.data, function (i, item) {
                str =	item.list
                // console.log("----",item);
                var eachhtml ="";
                strhtml +=
                    '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">'+
                    '<div class="">'+
                    '<div class="fl-40 mgr-10 self-top">'+
                    '<img src="'+item.title.thumbnail+'"/>'+
                    '</div>'+
                    '<div class="pdl-10 self-top">'+
                    '<h4 style="font-size:20px">'+item.title.title+'</h4>'+
                    '<div class="self-g">'+item.title.description.substr(0,83)+'...</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="first-none" style="position:relative;top:-33px">'+
                    jQuery.each(str, function (key, value) {
                        eachhtml+='<div class="clear-div" style="cursor:pointer;overflow:hidden" onclick="detail('+value.id+')">'+value.title+'</div>';
//                              return eachhtml;
                    })
                    +eachhtml+
                    '</div>'+
                    '</div>';
            });

            jQuery("#courseInfo").html(strhtml);
        },
        error: function (e) {
        }
    });
}


//数学模块
function getTeachModel() {
    jQuery.ajax({
        url : getBasePath()+"course/teachModel",
        type : "GET",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            jQuery.each(response.data, function (i, item) {
                strhtml +=
                    '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12"  onclick="articalDetail('+item.id+')">'+
                    '<div class="">'+
                    //                      '<div class="fl-40">'+

                    //                      '</div>'+
                    //                      '<span></span>'+
                    '<div class="params params_'+i+'" style="width:100%">'+
                    '<img  class="fl-40" align="left" src="'+item.thumbnail+'" alt="'+item.title+'" title="'+item.title+'" style="width: 166px;height: 130px!important;margin-right:10px"/>'+
                    '<h4>'+item.title+'</h4>'+
                    '<div>'+item.description+'</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>';
            });
            jQuery("#teachModel").html(strhtml);
        },
        error: function (e) {
        }
    });
}
jQuery(function(){
    //新闻资讯
    jQuery.ajax({
        url : getBasePath()+"course/newsinfo",
        type : "GET",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            var smailhtml = "";
            jQuery.each(response.data, function (i, item) {
                console.log(item.list);
                var etchhtml = "";
                if (item.list) {
                    jQuery.each(item.list, function (key, value) {
//                  		console.log("---",key);
                        etchhtml+='<a class="ct-7y" href="./detail.html?id='+value.id+'">'+value.title+'</a>';
//						return etchhtml;
                    });

                }
                if (item.list && item.list[1]) {
                    smailhtml +=
                        '<div class="row pd-smail-5">'+
                        '<a class="" href="./detail.html?id='+item.list[1].id+'" alt="" title="">'+
                        //	                    '<div class="col-sm-3 col-xs-3">'+
                        //	                        '<img src="'+item.list[1].thumbnail+'"/>'+
                        //	                    '</div>'+
                        '<div class="col-sm-12 col-xs-12">'+
                        '<div class="index-smail-title">'+item.list[1].title+'</div>'+
                        '<div class="smail-case-down">'+
                        '<span class="smail-add-time">'+item.title.add_time+'</span>'+
                        '<span class="smail-add-author">作者：'+item.title.author+'</span>'+
                        '</div>'+
                        '</div>'+
                        '</a>'+
                        '</div>';
                }
//          	console.log(i);
                strhtml+=
                    '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">'+
                    '<a class="case-box-2" href="./detail.html?id='+item.title.id+'" alt="" title="">'+
                    '<div class="case-thum">'+
                    '<img src="'+item.title.thumbnail+'"/>'+
                    '<div class="case-name">'+item.title.title+'</div>'+
                    '</div>'+
                    //                      '<div class="case-title">'+item.title.title+'</div>'+
                    '<div class="case-posi"><div class="case-describe"><span class="inner_span">'+item.title.description.substr(0,80)+'</span></div></div>'+
                    '</a>'+
                    '<div class="first-none">'+etchhtml+
                    '</div>'+
                    '</div>';

            });
            jQuery("#newsinfo").html(strhtml);
            jQuery("#newsinfo_smail").html(smailhtml);
        },
        error: function (e) {
            jQuery("#newsinfo").html(e.code);
        }
    });

//  	 if(jQuery("#phone").val() ==""){
//	 		jQuery("#myModal").modal();
//			jQuery(".modal-body").html("请输入手机号码");
//  	 }
//  	  if(jQuery("#name").val() ==""){
//	 		jQuery("#myModal").modal();
//			jQuery(".modal-body").html("请输入姓名");
//  	 }
    //	$("#Immediately").bind('click', sendCode);


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

    $("#myCarousel").carousel({
        interval: 2000
    })
});

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

function detail(id){
    window.location.href="course-detail.html?id="+id
    // +'&type_id='+type_id;
}
function articalDetail(id){
    window.location.href="detail.html?id="+id
    // +'&type_id='+type_id;
}

function isObject(str){
    str=str.replace(/\r\n/ig,"[object Object]");
    return str;
}
