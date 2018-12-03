getUrlPara();
getDetail();
function getDetail() {
    $.ajax({
        url : getBasePath()+"course/courseDetail",
        data:{
            id:getUrlPara(),
        },
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            var typeHtml ="";
            var item = response.data;
                strhtml +=
                '<div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
                    '<h3 class="text-center c-gray">'+item.title+'</h3>'+
                '</div>'+
                '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+
                    '时间：'+item.add_time+
                '</div>'+
                // '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+
                //     '来源：<a href="'+item.source+'" alt="">'+item.source+'</a>'+
                // '</div>'+
                // '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+'作者：'+item.author_name+'</div>'+
                '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+'阅读量：'+item.pviews+'</div>'+
                '<div class="row">'+
                    '<div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
                        item.description+
                        '<img src="'+getBasePath()+item.thumbnail+'">'+
                    '</div>'+
                    '<div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
                        item.content+
                    '</div>'+
                '</div>';
                $("#typetitle").html(response.msg);
                $("#detail").html(strhtml);
            },
        error: function (e) {
        }
    });
}

//获取url参数 id

function getUrlPara(){  
    var url = document.location.toString();
　　 var arrUrl = url.split("?id=");
　　 var para = arrUrl[1];
    console.log(para);
　　 return para;
}