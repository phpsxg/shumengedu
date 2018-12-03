$(function(){
    getPageOfMemo(1);
})

// 分页函数
function getPageOfMemo(pageNumber) {
    var pageSize = 10;
    var totalPages =100;
    var totalNumber =0;
    // console.log(getUrlPara());
    $.ajax({
        url : basePath+"teacher/teacherTypeList",
        type : "POST",
        data : {
            "pageNumber" : pageNumber, // 初始页
            "pageSize" : pageSize,
            "type_id":getUrlPara(),
        },
        dataType : "json",
        success : function(response) {
        		$(".loadingBox").css("display","none");
        		$(".loadingHide").css("display","block");
            if (response.data != null) {
                //匹配标题
                $("#newsTypeTitle").html(response.msg);
                totalNumber = response.data.totalNumber;
                //计算总条数
                totalPages = totalNumber% pageSize ==0?totalNumber/pageSize:totalNumber/pageSize+1;
                var htm = "";
                $.each(response.data.list, function(i, item) {
                    htm+= 
                    '<div class="panel-body">'+
                        '<div class="row">'+
                            '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">'+
                                '<img onclick="detail('+item.id+')" src="'+item.thumbnail+'"/>'+
                            '</div>'+
                            '<div class="positon-relative col-lg-8 col-md-8 col-sm-12 col-xs-12">'+
                                '<div class="pdl-10">'+
                                    '<p class="about-t" onclick="detail('+item.id+')">'+item.title+'</p>'+
                                '</div>'+
                                '<div>'+
                                    '<p class="pt-10">'+item.content+'</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row border-bottom">'+
                            '<div class="col-lg-4 col-md-3 col-sm-12 col-xs-12">'+'时间：'+item.add_time+'</div>'+
                            '<div class="col-lg-4 col-md-3 col-sm-12 col-xs-12">'+
                                // '来源：<a href="'+item.source+'" alt="">查看</a>'+
                                '来源：<span style="color:#f67f4c">'+item.source+'</span>'+
                            '</div>'+
                            '<div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">'+'作者：'+item.author_name+'</div>'+
                            '<div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">'+'阅读：'+item.pviews+'</div>'+
                        '</div>'+
                    '</div>';
                });
                // $("<ul id='element-pages'></ul>").appendTo('#teacherTypeList');
                $('#teacherTypeList').html(htm);
               
                var element = $('#element-pages');
                var options = {
                    containerClass:"pagination"
                    // , numberOfPages: 3
                    , onPageClicked:null
                    , onPageChanged:null,


                    bootstrapMajorVersion : 3,
                    currentPage : pageNumber, // 当前页数
                    numberOfPages : totalPages, // 显示按钮的数量
                    totalPages : totalPages, // 总页数
                    itemTexts : function(type, page, current) {
                        switch (type) {
                        case "first":
                            return "<<";//首页
                        case "prev":
                            return "<";//上一页
                        case "next":
                            return "<";//下一页
                        case "last":
                            return ">>";//末页
                        case "page":
                            return page;
                        }
                    },
                    // 点击事件，用于通过Ajax来刷新整个list列表
                    onPageClicked : function(event, originalEvent, type, pageNumber) {
                        getPageOfMemo(pageNumber);
                    }
                };

                element.bootstrapPaginator(options);
            }
        }
    });
};
getTeacherHotList();
getTeacherTypeNew();
//师资力量 最热
function getTeacherHotList(){
    $.ajax({
        url : getBasePath()+"teacher/teacherHotList",
        data:{
            pageNumber:1,
            pageSize:5,
            type_id:getUrlPara(),
        },
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            var strhtml = "";
            $.each(response.data.list, function (i, item) {
                strhtml += 
                		'<div class="list-a" onclick="detail('+item.id+')">'+
                  		'<a href="javascript:void(0)" class="list-title">'+item.title+'</a>'+
                  		'<div class="font-12">日期：'+item.add_time+'<span class="pull-right">作者：'+item.author_name+'</span></div>'+
                  	'</div>';
//                  '<a href="javascript:void(0)" onclick="detail('+item.id+')">'+item.title+'<div class="c-gray">'+item.add_time+'</div></a> ' 
            });
            $("#teacherHotList").html(strhtml);
            },
        error: function (e) {
        }
    });
}
//师资力量 最新
function getTeacherTypeNew(){
    $.ajax({
        url : getBasePath()+"teacher/teacherTypeNew",
        data:{
            pageNumber:1,
            pageSize:5,
            type_id:getUrlPara(),
        },
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
            });
            $("#teacherTypeNew").html(strhtml);
            },
        error: function (e) {
        }
    });
}
function getUrlPara(){  
    var url = document.location.toString();
　　 var arrUrl = url.split("?type_id=");
　　 var para = arrUrl[1];
    // console.log("urlparams---",para);
　　 return para;
}

function detail(id){
    if(getUrlPara()!=undefined){
        // szll 标识师资导航
        window.location.href="detail.html?id="+id+'&type_id='+getUrlPara()+'&szll=2';
    }else{
        window.location.href="detail.html?id="+id+'&type_id='+getUrlPara();
    }
}


