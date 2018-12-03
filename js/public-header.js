/**
 * 
 * 
 * public header
 */
var basePath = 'https://api.shumengedu.com/';
// console.log(basePath);
document.writeln("<meta charset=\'UTF-8\'>");
document.writeln("<script src=\'./js/jquery.min.js\'></script>");
document.writeln("<script src=\'./services/common-config.js\'></script>");
document.writeln(" <link href=\'./css/mobile.css\'  rel=\'stylesheet\' type=\'text/css\' />");
document.writeln("        <div class=\'index-smail\'>");
document.writeln("            <header class=\'cd-main-header\'>");
document.writeln("                <a href=\'\' class=\'cd-logo\'><img src=\'./img/logo.png\' alt=\'Logo\'></a>");
document.writeln("                <a href=\'\' class=\'cd-nav-trigger\'>&nbsp;<span></span></a>");
document.writeln("                <a href=\'tel:400-1817-520\' class=\'call smail-call-phone\'><span class=\'glyphicon glyphicon-earphone\' aria-hidden=\'true\'></span><span>400-1817-520</span></a>");
document.writeln("                <nav class=\'cd-nav\'> </nav>");
document.writeln("            </header> <!-- .cd-main-header -->");
document.writeln("            <main class=\'cd-main-content\'>");
document.writeln("                <nav class=\'cd-side-nav\' style=\'\'>");
document.writeln("                    <ul>");
document.writeln("                        <li class=\'has-children overview\'>");
document.writeln("                            <a href=\'index.html\'>首页</a>");
document.writeln("                            ");
document.writeln("                            <ul>");
document.writeln("                                <li><a href=\'\'>All Data</a></li>");
document.writeln("                                <li><a href=\'\'>Category 1</a></li>");
document.writeln("                                <li><a href=\'\'>Category 2</a></li>");
document.writeln("                            </ul>");
document.writeln("                        </li>");
document.writeln("                        <li class=\'has-children comments\'>");
document.writeln("                            <a href=\'javascript:void(0)\' onclick=\'getPageOfMemo(1)'\>课程体系</a>");
document.writeln("                            <ul id=\'courseTypeListMobile\'>");
document.writeln("                                <li><a href=\'\'>All Comments</a></li>");
document.writeln("                                <li><a href=\'\'>Edit Comment</a></li>");
document.writeln("                                <li><a href=\'\'>Delete Comment</a></li>");
document.writeln("                            </ul>");
document.writeln("                        </li>");
document.writeln("                    </ul>");
document.writeln("                    <ul>");
document.writeln("                        <li class=\'has-children bookmarks\'>");
document.writeln("                            <a href=\'javascript:void(0)\'>数学教学</a>");
document.writeln("                            ");
document.writeln("                            <ul id=\'teacherSubmenuMobile\'>");
document.writeln("                                <li><a href=\'\'>All Bookmarks</a></li>");
document.writeln("                                <li><a href=\'\'>Edit Bookmark</a></li>");
document.writeln("                                <li><a href=\'\'>Import Bookmark</a></li>");
document.writeln("                            </ul>");
document.writeln("                        </li>");
document.writeln("                        <li class=\'has-children images\'>");
document.writeln("                            <a href=\'javascript:void(0)\'>新闻资讯</a>");
document.writeln("                            ");
document.writeln("                            <ul id=\'newsSubmenuMobile\'>");
document.writeln("                                <li><a href=\'\'>All Images</a></li>");
document.writeln("                                <li><a href=\'\'>Edit Image</a></li>");
document.writeln("                            </ul>");
document.writeln("                        </li>");
document.writeln("                    </ul>");
document.writeln("                    <ul>");
document.writeln("                        <li class=\'has-children\'>");
document.writeln("                            <a href=\'javascript:void(0)\'>加盟数萌</a>");
document.writeln("                            ");
document.writeln("                            <ul>");
document.writeln("                                <li><a href=\'jm.html\'>加盟主页</a></li>");
document.writeln("                                <li><a href=\'./jm-1.html?title=0\'>加盟优势</a></li>");
document.writeln("                                <li><a href=\'./jm-1.html?title=4\'>加盟代言</a></li>");
document.writeln("                                <li><a href=\'./jm-1.html?title=5\'>加盟寄语</a></li>");
document.writeln("                                <li><a href=\'./jm-1.html?title=2\'>加盟流程</a></li>");
document.writeln("                                <li><a href=\'./jm-1.html?title=1\'>加盟条件</a></li>");
document.writeln("                                <li><a href=\'./jm-1.html?title=3\'>加盟支持</a></li>");
document.writeln("                                <li><a href=\'./jm-1.html?title=6\'>加盟申请</a></li>");


document.writeln("                            </ul>");
document.writeln("                        </li>");
//document.writeln("                        <li class=\'has-children\'>");
//document.writeln("                            <a href=\'contact.html\'>校区分布</a>");
//document.writeln("                        </li>");
document.writeln("                        <li class=\'has-children\'>");
document.writeln("                            <a href=\'javascript:void(0)\'>关于我们</a>");
document.writeln("                            ");
document.writeln("                            <ul>");
document.writeln("                                <li><a href=\'./about-us.html?title=0\'>公司简介</a></li>");
document.writeln("                                <li><a href=\'./about-us.html?title=1\'>CEO问候语</a></li>");
document.writeln("                                <li><a href=\'./about-us.html?title=2\'>教育理念</a></li>");
document.writeln("                                <li><a href=\'./about-us.html?title=3\'>校区环境</a></li>");
document.writeln("                                <li><a href=\'./about-us.html?title=4\' class=\'\'>公司新闻</a></li>");
document.writeln("                                <li><a href=\'./about-us.html?title=5\'>联系我们</a></li>");
document.writeln("                            </ul>");
document.writeln("                        </li>");
document.writeln("                    </ul>");
document.writeln("                </nav>");
document.writeln("            </main>");
document.writeln("        </div>");
//document.writeln("        <script type=\'text/javascript\' src=\'http://www.17sucai.com/preview/1/2015-11-12/201509151643/js/jquery-2.1.1.min.js\'></script>");
document.writeln("        <script type=\'text/javascript\' src=\'./js/js-mobile-nav.js\'></script>");
document.writeln("        <script type=\'text/javascript\' src=\'./js/jquery.menu-aim.js\'></script>");

document.writeln("        <header class=\'index-big\'>");
document.writeln("            <div class=\'container\'>");
document.writeln("                <div class=\'logo\'><img src=\'./img/logo.png\' alt=\'\'></div>");
document.writeln("                <div class=\'header-nav\'>");
document.writeln("                    <ul>");
document.writeln("                        <li><a href=\'index.html\'>首页</a></li>");
document.writeln("                        <li><a href=\'index.html\'>品牌体系</a></li>");
document.writeln("                        <li><a href=\'course.html\'>课程体系</a>");
document.writeln("                            ");
document.writeln("                        </li>");
document.writeln("                        <li><a href=\'teacher-strong.html\'>数学教学</a></li>");
document.writeln("                        <li><a href=\'new-info-list.html\'>新闻资讯</a></li>");
document.writeln("                        <li><a href=\'jm-1.html\'>加盟数萌</a></li>");
//document.writeln("                        <li><a href=\'contact.html\'>校区分布</a></li>");
document.writeln("                        <li><a href=\'about-us.html\'>关于我们</a>");
document.writeln("                        </li>");
document.writeln("                        <li><a href=\'\' class=\'call\'><span class=\'icon-call\'>&nbsp;&nbsp;</span><span style=\'font-size:16px;color: #f67f4c;\'>400-1817-520</span></a></li>");
document.writeln("                    </ul>");
document.writeln("                </div>");
document.writeln("                <div class=\'twoNav\'>");
document.writeln("                    <!-- 课程体系 -->");
document.writeln("                    <div class=\'row pz hide\'></div>");
document.writeln("                    <div id=\'brandSystem\' class=\'row pz hide\'>");
document.writeln("                        <div class=\'col-lg-offset-4 col-md-offset-4 col-lg-1 col-md-1 col-sm-2 col-xs-3\'>");
document.writeln("                            <a href=\'./thinkingHall.html\'>数萌思维馆</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'./mathOnline.html\'>数萌在线</a>");
document.writeln("                        </div>");
document.writeln("                    </div>");
document.writeln("                    <!-- 课程 -->");
document.writeln("                    <div id=\'courseTypeList\' class=\'row pz hide\'>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>Ucrea</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>思考的IG</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>飞翔的IG</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\' col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>数学思维</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>趣味数学</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>数学启蒙</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>数学教育</a>");
document.writeln("                        </div>");
document.writeln("                    </div>");
document.writeln("                    <!-- 师资力量 -->");
document.writeln("                    <div  id=\'teacherSubmenu\' class=\'row pz hide\'>");
document.writeln("                        <div class=\'col-lg-offset-3 col-md-offset-3 col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>数学答疑</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>数学知识</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>数学资讯</a>");
document.writeln("                        </div>");
document.writeln("                    </div>");
document.writeln("                    <!-- 新闻资讯 -->");
document.writeln("                    <div id=\'newsSubmenu\' class=\'row pz hide\'>");
document.writeln("                        <div class=\'col-lg-offset-3 col-md-offset-3 col-lg-1 col-md-1 col-sm-2 col-xs-3\'>");
document.writeln("                            <a href=\'\'>教育资讯</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-1\'>");
document.writeln("                            <a href=\'\'>行业资讯</a>");
document.writeln("                        </div>");
document.writeln("                    </div>");
document.writeln("                    <!-- 加盟数萌 -->");
document.writeln("                    <div class=\'row pz hide\' id=\'jmsm\'>");
document.writeln("                        <div class=\'col-lg-1 col-lg-offset-3 col-md-offset-3 col-md-1 col-sm-2 col-xs-2\'>");
document.writeln("                            <a href=\'jm.html\'>加盟主页</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-2 col-xs-2\'>");
document.writeln("                            <a href=\'./jm-1.html?title=0\'>加盟优势</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-2 col-xs-2\'>");
document.writeln("                          <a href=\'./jm-1.html?title=4\'>加盟代言</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-2 col-xs-2\'>");
document.writeln("                            <a href=\'./jm-1.html?title=5\'>加盟寄语</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-2 col-xs-2\'>");
document.writeln("                            <a href=\'./jm-1.html?title=2\'>加盟流程</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-2 col-xs-2\'>");
document.writeln("                            <a href=\'./jm-1.html?title=1\'>加盟条件</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-2 col-xs-2\'>");
document.writeln("                            <a href=\'./jm-1.html?title=3\'>加盟支持</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-2 col-xs-2\'>");
document.writeln("                            <a href=\'./jm-1.html?title=6\'>加盟申请</a>");
document.writeln("                        </div>");
document.writeln("                    </div>");
//document.writeln("                    <div class=\'row pz hide\'></div>");
document.writeln("                    <div class=\'row pz hide\' id=\'aboutUS\'>");
// 关于我们
document.writeln("                        <div class=\'col-lg-offset-3 col-md-offset-3 col-lg-1 col-md-1 col-sm-3 col-xs-2\'>");
document.writeln("                            <a href=\'./about-us.html?title=0\'>公司简介</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-2\'>");
document.writeln("                            <a href=\'./about-us.html?title=1\'>CEO问候语</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-2\'>");
document.writeln("                            <a href=\'./about-us.html?title=2\'>教育理念</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\' col-lg-1 col-md-1 col-sm-2 col-xs-3\'>");
document.writeln("                            <a href=\'./about-us.html?title=3\'>校区环境</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-2\'>");
document.writeln("                            <a href=\'./about-us.html?title=4\' class=\'getNews\'>公司新闻</a>");
document.writeln("                        </div>");
document.writeln("                        <div class=\'col-lg-1 col-md-1 col-sm-1 col-xs-2\'>");
document.writeln("                            <a href=\'./about-us.html?title=5\'>联系我们</a>");
document.writeln("                        </div>");
document.writeln("                    </div>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("    </header>");

jQuery(function(){
    jQuery(".header-nav").find("li").each(function(index,ele){
        jQuery(ele).mouseover(function(){
//          if(index === 0 || index == 5){
	        if(index === 0){
                jQuery('.pz').addClass('hide');
                return;
            }else{
                jQuery('.twoNav').find('.pz').each(function(i,j){
                    if(index === i ){
                        // alert(i);
                        jQuery('.pz').eq(i).removeClass('hide')
                        
                        .siblings('.pz').addClass('hide');
                    }else{
                        return;
                    }
                })
            }
        })
        jQuery('.pz').mouseleave(function(){
            jQuery('.pz').addClass('hide')
        })

    })
    
//})
//新闻资讯子菜单列表
//$(function(){
    jQuery.ajax({
        url : basePath+"news/newsSubmenu",
        type : "GET",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            var mobilehtml ="";
            jQuery.each(response.data, function (i, item) {
                if(i == 0){
                    strhtml+= 
                    "<div class='col-lg-offset-3 col-md-offset-3 col-lg-1 col-md-1 col-sm-3 col-xs-3'>"+
                        "<a href=new-info-list.html?type_id="+item.id+">"+item.name+"</a>"+
                    "</div>";
                }
                else if(i==1){
	                strhtml+= 
	                "<div class='col-lg-1 col-md-1 col-sm-3 col-xs-3'>"+
	                    "<a href=new-info-list.html?type_id="+item.id+">"+item.name+"</a>"+
	                "</div>";
	                mobilehtml+=
	                "<li><a href=new-info-list.html?type_id="+item.id+">"+item.name+"</a></li>";
        			}
                else if(i==2){
                		strhtml+="";
                }
            });
                jQuery("#newsSubmenuMobile").html(mobilehtml);
                jQuery("#newsSubmenu").html(strhtml);
        },
        error: function (e) {
    		}
    });
    //师资力量菜单列表
    jQuery.ajax({
        url : basePath+"teacher/teacherSubmenu",
        type : "GET",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            var mobilehtml = "";
            jQuery.each(response.data, function (i, item) {
                if(i == 0){
                    strhtml+= 
                    "<div class='col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-lg-1 col-md-1 col-sm-2 col-xs-3'>"+
                        "<a href=teacher-strong.html?type_id="+item.id+">"+item.name+"</a>"+
                    "</div>";
                }else {
	                strhtml+= 
	                "<div class='col-lg-1 col-md-1 col-sm-2 col-xs-3'>"+
	                    "<a href=teacher-strong.html?type_id="+item.id+">"+item.name+"</a>"+
	                "</div>";
	
	                mobilehtml+=
	                "<li><a href=teacher-strong.html?type_id="+item.id+">"+item.name+"</a></li>";
               }
            });
                jQuery("#teacherSubmenuMobile").html(mobilehtml);
                jQuery("#teacherSubmenu").html(strhtml);
            },
        error: function (e) {
        }
    });
    //课程体系菜单子列表
    jQuery.ajax({
        url : basePath+"course/courseTypeList",
        type : "GET",
        dataType : "json",
        crossDomain: true,
        success: function(response) {
            // console.log(response);
            var strhtml = "";
            var mobilehtml = "";
            jQuery.each(response.data, function (i, item) {
                if(i == 0){
                    strhtml+= 
                    "<div class='col-lg-offset-3 col-md-offset-3 col-lg-1 col-md-1 col-sm-1 col-xs-2'>"+
                        "<a href=course.html?type_id="+item.id+">"+item.title+"</a>"+
                    "</div>";
                }else {
                    strhtml+= 
                "<div class='col-lg-1 col-md-1 col-sm-2 col-xs-2'>"+
                    "<a href=course.html?type_id="+item.id+">"+item.title+"</a>"+
                "</div>";
                }
                mobilehtml+=
                "<li><a href=course.html?type_id="+item.id+">"+item.title+"</a></li>";
               

            });
                jQuery("#courseTypeListMobile").html(mobilehtml);
                jQuery("#courseTypeList").html(strhtml);
            },
        error: function (e) {
        }
    });
//  jQuery(window).resize(function() {
//      var headerHeight = jQuery("header.index-big").height();
//      jQuery(".pz").css("top",headerHeight);
//      // console.log(headerHeight);
//  });
    jQuery(".cd-side-nav .has-children").click(function(){
        jQuery(this).children("ul").toggle();
        // jQuery(this).siblings("ul").children("ul").toggle();
    })
})
window.onload = function(){
}
