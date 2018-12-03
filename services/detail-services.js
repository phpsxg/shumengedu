getUrlPara();
getDetail();
function getDetail() {
    $.ajax({
        url : getBasePath()+"news/articleDetail",
        data:{
            id:GetRequest().id,
        },
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            $(".currTitle").html(response.data.title);
            $(".TypeTitle").html(response.data.type_name);
            // console.log(response);
            var strhtml = "";
            var typeHtml ="";
            var item = response.data;
            strhtml +=
                // '<div class="article-content col-lg-8 col-md-8 col-sm-8 col-xs-12">'+
                '<div class="text-center article-tit">';
            strhtml +='<h3>'+item.title+'</h3>';
            strhtml +='<span>来源：'+item.source+'</span>';
            strhtml +='<span>作者：'+item.author_name+'</span>';
            strhtml +='<span>时间：'+item.add_time+'</span>';
            strhtml +='<span>阅读量：'+item.pviews+'</span>';
            strhtml +='</div>';
            strhtml += '<div class="descrobe-indent article-des">'+item.description+'</div>';
            strhtml +='<div>';
            strhtml +='<div class="text-center">';
            if(item.thumbnail){
                strhtml +='<img src="'+item.thumbnail+'">';
            }
            strhtml +='</div>';
            strhtml +='<pre>'+item.content+'</pre>';
            strhtml +='</div>';
            // '</div>';
            $("#detail").html(strhtml);


            // $("#detailtitle").html(response.msg);
        },
        error: function (e) {
        }
    });
}

getTeacherHotList();
getTeacherTypeNew();
//teacher最
function getTeacherHotList(){
    var data;
    var url;
    if(GetRequest().szll == 2){
        url = getBasePath()+"teacher/teacherHotList";
        if(GetRequest().type_id == undefined){
            data ={
                pageNumber:1,
                pageSize:5,
            }
        }else {
            data={
                pageNumber:1,
                pageSize:5,
                type_id:GetRequest().type_id,
            }
        }
    }else /*if(GetRequest().szll == 1) */{
        url = getBasePath()+"news/newsHotList";
        if(GetRequest().type_id == undefined){
            data ={
                pageNumber:1,
                pageSize:5,
            }
        }else {
            data={
                pageNumber:1,
                pageSize:5,
                type_id:GetRequest().type_id,
            }
        }
    }

    $.ajax({
        url : url,
        data:data,
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            console.log(111111);
            var strhtml = "";
            $.each(response.data.list, function (i, item) {
                strhtml +=
                    '<div class="list-a" onclick="detail('+item.id+')">'+
                    '<a href="javascript:void(0)" class="list-title">'+item.title+'</a>'+
                    '<div class="font-12">日期：'+item.add_time+'<span class="pull-right">作者：'+item.author_name+'</span></div>'+
                    '</div>';

//                  '<a href="javascript:void(0)" onclick="detail('+item.id+')">'+item.title+'<div class="c-gray">'+item.add_time+'</div></a> '
            });
            $(".HotList").html(strhtml);
        },
        error: function (e) {
            console.log(444444);

        }
    });
}
//teacher力量最
function getTeacherTypeNew(){
    var data;
    var url;
    if(GetRequest().szll == 2){
        url = getBasePath()+"teacher/teacherTypeNew";
    }else/* if(GetRequest().szll == 1)*/ {
        url = getBasePath()+"news/newsTypeNew";
    }
    // console.log("===",GetRequest().type_id);
    if(GetRequest().type_id == undefined){
        data ={
            pageNumber:1,
            pageSize:5,
        }
    }else {
        data={
            pageNumber:1,
            pageSize:5,
            type_id:GetRequest().type_id,
        }
    }
    $.ajax({
        url:url,
        data:data,
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            console.log(22);
            $(".TypeTitle").html(response.data.type_name);
            // console.log(response);
            var strhtml = "";
            $.each(response.data.list, function (i, item) {
                strhtml +=
                    '<div class="list-a" onclick="detail("'+item.id+')">'+
                    '<a href="javascript:void(0)" class="list-title">'+item.title+'</a>'+
                    '<div class="font-12">日期：'+item.add_time+'<span class="pull-right">作者：'+item.author_name+'</span></div>'+
                    '</div>';
//                  '<a href="javascript:void(0)" onclick="detail('+item.id+')">'+item.title+'<div class="c-gray">'+item.add_time+'</div></a> '
            });
            $(".NewList").html(strhtml);
        },
        error: function (e) {
            console.log(33333333);
        }
    });
}

//获取url参数 id

function getUrlPara(){
    var url = document.location.toString();
    var arrUrl = url.split("?id=");
    var para = arrUrl[1];
    // console.log(para);
    return para;
}
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    // type_id = theRequest.type_id;
    console.log("----",theRequest);
    return theRequest;
}
prex();
function prex(){
    $.ajax({
        url : getBasePath()+"news/articleAnother",
        data:{
            id:GetRequest().id,
        },
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            var strhtml="";
            var item = response.data;
            strhtml +='<div class="text-left style="padding:0 40px">';
            if(item.last.length==0){
                item.last.title = "已经是第一篇了"
                strhtml +='<a href=javascript:void(0)>上一篇:'+item.last.title+'</a>';
            }else {
                strhtml +='<a href=./detail.html?id='+item.last.id+'>上一篇:'+item.last.title+'</a>';
            }
            if(item.next.length==0){
                item.next.title = "已经是最后一篇了"
                strhtml +='<a href=javascript:void(0)>下一篇:'+item.next.title+'</a>';
            } else {
                strhtml +='<a href=./detail.html?id='+item.next.id+'>下一篇:'+item.next.title+'</a>';

            }
            strhtml +='</div>';
            $(".prexContent").html(strhtml);
        },
        error: function (e) {
        }
    });
}
function detail(id){
    if(getUrlPara()!=undefined){
        window.location.href="detail.html?id="+id+'&type_id='+getUrlPara();
    }else{
        window.location.href="detail.html?id="+id;
    }

}