getUrlPara();
getDetail();
getTeacherHotList();
 getTeacherTypeNew();
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
            $(".currTitle").html(response.data.title);
            var strhtml = "";
            var typeHtml ="";
            var item = response.data;
                strhtml +=
                // '<div class=" col-lg-8 col-md-8 col-sm-12 col-xs-12">'+
                //     '<h3 class="text-center font-30 c-2">'+item.title+'</h3>'+
                // '</div>'+
                // '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">'+
                //     '时间：'+item.add_time+
                // '</div>'+
                // // '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+
                // //     '：<a href="'+item.source+'" alt="">'+item.source+'</a>'+
                // // '</div>'+
                // // '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+'作者：'+item.author_name+'</div>'+
                // '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">'+'阅读量：'+item.pviews+'</div>'+
                // '<div class="row">'+
                //     '<div class=" col-lg-12 col-md-3 col-sm-12 col-xs-12">'+
                //         item.description+
                //         '<img src="'+item.thumbnail+'">'+
                //     '</div>'+
                //     '<div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12"><pre>'+
                //         item.content+
                //     '</pre></div>'+
                // '</div>';
                // '<div class="article-content col-lg-8 col-md-8 col-sm-8 col-xs-12">'+
                '<div class="text-center article-tit">'+
                '<h3>'+item.title+'</h3>'+
                '<span>来源：'+item.source+'</span>'+
                '<span>作者：'+item.user_name+'</span>'+
                '<span>时间：'+item.add_time+'</span>'+
                '<span>阅读量：'+item.pviews+'</span>'+
                '</div>'+
                '<div class="descrobe-indent article-des">'+item.description+'</div>'+
                '<div>'+
                '<div class="text-center">'+
                '<img src="'+item.thumbnail+'">'+
                '</div>'+
                '<pre>'+item.content+'</pre>'+
                '</div>';
                // '</div>';
                $("#coursedetailtitle").html(response.msg);
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
    // console.log("----",theRequest.type_id);
    return theRequest;  
 }  

 

 //课程分类最新
function getTeacherHotList(){
    var data;
    
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
        url : getBasePath()+"course/courseListNew",
        data:data,
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            $(".TypeTitle").html(response.msg);
            var strhtml = "";
            // console.log(response.data.list);
            $.each(response.data.list, function (i, item) {
                strhtml += 
                '<div class="list-a" onclick="detail('+item.id+')">'+
                  		'<a href="javascript:void(0)" class="list-title">'+item.title+'</a>'+
                  		'<div class="font-12">日期：'+item.add_time+'<span class="pull-right">作者：'+item.author_name+'</span></div>'+
                  	'</div>';
                  	
//                  '<a href="javascript:void(0)" onclick="detail('+item.id+')">'+item.title+'<div class="c-gray">'+item.add_time+'</div></a> ' 
            });
            $(".courseTypeNew").html(strhtml);
            
            
        },
        error: function (e) {
        }
    });
}
//课程分类最热
function getTeacherTypeNew(){
    var data;
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
        url : getBasePath()+"course/courseListHot",
        data:data,
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            $.each(response.data.list, function (i, item) {
                strhtml += 
                '<div class="list-a" onclick="detail('+item.id+')">'+
                  		'<a href="javascript:void(0)" class="list-title">'+item.title+'</a>'+
                  		'<div class="font-12">日期：'+item.add_time+'<span class="pull-right">作者：'+item.author_name+'</span></div>'+
                  	'</div>';
//                  '<a href="javascript:void(0)" onclick="detail('+item.id+')">'+item.title+'<div class="c-gray">'+item.add_time+'</div></a> ' 
            });
            $(".courseHotList").html(strhtml);
            },
        error: function (e) {
        }
    });
}
prex();
 function prex(){
    $.ajax({
        url : getBasePath()+"course/courseAnother",
        data:{
            id:GetRequest().id,
        },
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml="";
            var item = response.data;
            strhtml +='<div class="text-left style="padding:0 40px">';
            if(item.last.length==0){
            		item.last.title = "已经是第一篇了"
            		strhtml +='<a href=javascript:void(0)>上一篇:'+item.last.title+'</a>';
            	}else {
            		 strhtml +='<a href=./course-detail.html?id='+item.last.id+'>上一篇:'+item.last.title+'</a>';
            	}
            if(item.next.length==0){
            		item.next.title = "已经是最后一篇了"
            		strhtml +='<a href=javascript:void(0)>下一篇:'+item.next.title+'</a>';
            } else {
            	  strhtml +='<a href=./course-detail.html?id='+item.next.id+'>下一篇:'+item.next.title+'</a>';
            	
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
        window.location.href="course-detail.html?id="+id+'&type_id='+getUrlPara();
    }else{
        window.location.href="course-detail.html?id="+id;
    }
    
}