$(function(){
    
    // $.ajax(baseUrl+"teacher/index", {
    //     data: {
    //       'pageNumber': '成都',
    //       'pageSize': '2016.12.12'
    //     },
    //     type:"POST",
    //     // jsonp:"callback",
    //     crossDomain: true,
    //     success: function(data) {
    //         console.log(data);
    //     },
    //     error: function (e) {
    //             alert("error");
    //         }
    // });
    
})
getPageOfMemo(1);
// 分页函数
function getPageOfMemo(pageNumber) {
    var basePath = 'https://api.shumengedu.com';
    var pageSize = 5;
    $.ajax({
        url : basePath+"teacher/teacherTypeList",
        type : "POST",
        data : {
            "pageNumber" : pageNumber, // 初始页
            "pageSize" : pageSize,
        },
        dataType : "json",
        success : function(response) {
            var totalPages;
            if (response.data != null) {
                totalPages = response.data.totalNumber;
                var htm = "";
                totalNumber = response.data.totalNumber;
                $.each(response.data.list, function(i, item) {
                    htm+= 
                    '<div class="panel-body">'+
                        '<div class="row">'+
                            '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">'+
                                '<img src="'+getBasePath()+item.thumbnail+'"/>'+
                            '</div>'+
                            '<div class="positon-relative col-lg-8 col-md-8 col-sm-12 col-xs-12">'+
                                '<div class="pdl-10">'+
                                    '<p class="about-t">'+item.title+'</p>'+
                                '</div>'+
                                '<div>'+
                                    '<p class="pt-10">'+item.content+'</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row border-bottom">'+
                            '<div class="col-lg-4 col-md-3 col-sm-3 col-xs-3">'+'时间：'+item.add_time+'</div>'+
                            '<div class="col-lg-4 col-md-3 col-sm-3 col-xs-3">'+
                                '来源：<a href="'+item.source+'" alt="">查看</a>'+
                            '</div>'+
                            '<div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">'+'作者：'+item.author_name+'</div>'+
                            '<div class="col-lg-2 col-md-3 col-sm-3 col-xs-3">'+'阅读：'+item.pviews+'</div>'+
                        '</div>'+
                    '</div>';
                });
                $('#teacherTypeList').html(htm);
                var element = $('#element-pages');
                var options = {
                    bootstrapMajorVersion : 3,
                    currentPage : pageNumber, // 当前页数
                    numberOfPages : 5, // 显示按钮的数量
                    totalPages : totalPages, // 总页数
                    itemTexts : function(type, pageNumber, current) {
                        switch (type) {
                        case "first":
                            return "首页";
                        case "prev":
                            return "上一页";
                        case "next":
                            return "下一页";
                        case "last":
                            return "末页";
                        case "pageNumber":
                            return pageNumber;
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
        },
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            $.each(response.data.list, function (i, item) {
                strhtml += 
                    '<a href="javascript:void(0)" onclick="detail('+item.id+')">'+item.title+'<div class="c-gray">'+item.add_time+'</div></a> ' 
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
        },
        type : "POST",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            $.each(response.data.list, function (i, item) {
                strhtml += 
                    '<a href="javascript:void(0)" onclick="detail('+item.id+')">'+item.title+'<div class="c-gray">'+item.add_time+'</div></a> ' 
            });
            $("#teacherTypeNew").html(strhtml);
            },
        error: function (e) {
            alert("error");
        }
    });
    

}
function detail(id){
    window.location.href="detail.html?id="+id;
}


