/**
 * 动态添加js或css
 * @param url js/css url地址
 * @param fileType 加载文件类型 js/css
 * @author peak lin
 */
function addJsFiles(url,fileType){
  var vessel = $('body');
  var addheadfile;
  if(fileType=="js"){
    addheadfile= document.createElement("script");
    addheadfile.type = "text/javascript";
    addheadfile.src=url;
  }else{
    addheadfile= document.createElement("link");
    addheadfile.type = "text/css";
    addheadfile.rel="stylesheet";
    addheadfile.rev = "stylesheet";
    addheadfile.media = "screen";
    addheadfile.href=url;
  }
  vessel.append( addheadfile);
}
/**
 * 网页加载
 * @param type load 类型
 * @author peak lin
 */
function klzz_load(type) {
    if(!type){
        var type = '';
    }
    var html = '<div class="klzz_load_main'+type+'">'
                  +'<div class="klzz_load">'
                      +'<div class="rect1"></div>'
                      +'<div class="rect2"></div>'
                      +'<div class="rect3"></div>'
                      +'<div class="rect4"></div>'
                     + '<div class="rect5"></div>'
                  +'</div>'
                +'</div>';
    $('body').prepend(html);
}
/**
 * 提示框
 * @param msg 提示内容
 * @param code 提示状态 200 成功 201失败
 * @author peak lin
 */
function msg(msg,code) {
    if(msg){
        var icon = '&#xe640;';
        var color = 'green';
        if(code == 200){
            icon = '&#xe640;';
            color = 'green';
        }else{
            icon = '&#xe685;';
            color = '#ff9000';
        }
        var dom = $("<div class='alert-tips'><i class='iconfont' style='color: "+color+"; font-size: 20px; margin-right: 3px;'>"+icon+"</i>"+msg+"</div>");
        $('.alert-tips').remove();
        $('body').append(dom);
        dom.animate({top:100},function () {
            var _this = $(this);
            setTimeout(function () {
                _this.animate({top:-35},function () {
                    $(this).remove();
                })
            },2000);
        });
        return false;
    }
}
/**
 * 勾选协议
 * @param msg 提示内容
 * @author peak lin
 */
function agreementBox(job) {
    // 是否勾选协议
    var amt = $(job).attr('data');
    if(amt == 1){
        $(job).attr('data',0);
        $(job).attr("src","/static/weixin/images/check_n.jpg");
    }else{
        $(job).attr('data',1);        
        $(job).attr("src","/static/weixin/images/check_s.jpg");
    }               
}
/**
 * 获取勾选协议
 * @param msg 提示内容
 * @author peak lin
 */
function agreementVla() {
    var isamt = $('div img').hasClass('agreementVla');
    if(isamt == true){
        var amt = $('.agreementVla').attr('data');
        if(amt != 1){
            msg('请选中同意协议');return false;
        }
    }    
}

/**
 * 验证手机号
 * @author peak lin
 */
function cfaSmsMobile() {
    var isMobile = $('input').hasClass('smsMobile');
    if(isMobile == false){
        msg('请在手机号表单设置“smsMobile【class】”');return false;
    }
    var smsMobile = $('input.smsMobile').val();    
    if(!smsMobile || smsMobile == ''){
        msg('请输入手机号');return false;
    }
    if(!/^1\d{10}$/.test(smsMobile)){
        msg('请输入正确的手机号');return false;
    }             
    return smsMobile;
}
/**
 * 验证验证码
 * @author peak lin
 */
function cfaSmsCode() {
    var smsCode = $('input').hasClass('smsCode');
    if(smsCode == false){
        msg('请在验证码表单设置“smsCode【class】”');return false;
    }
    var smsCode = $('input.smsCode').val();    
    if(!smsCode || smsCode == ''){
        msg('请输入验证码');return false;
    }
    if(!/^\d{4}$/.test(smsCode)){
        msg('验证码只能输入4位整数');return false;
    }             
    return smsCode;
}
/**
 * 获取学生姓名
 * @author peak lin
 */
function getSname() {
    var issName = $('input').hasClass('sName');
    var sName = '';
    if(issName){
        var sName = $('input.sName').val();
        if(!sName){
            msg('请输入学生姓名');return false;
        }
    }
    return sName;
}
/**
 * 获取学生年龄
 * @author peak lin
 */
function getSage() {
    var isSage = $('select').hasClass('sAge');
    var sAge = '';
    if(isSage){
        var sAge = $('select.sAge').val();
    }
    return sAge;
}
/**
 * 获取学生性别
 * @author peak lin
 */
function getSsex() {
    var isSsex = $('select').hasClass('sSex');
    var sSex = '';
    if(isSsex){
        var sSex = $('select.sSex').val();
    }
    return sSex;
}
/**
 * 获取就读班级
 * @author liangki
 */
function getSattend_class() {
    var isSattend_class = $('select').hasClass('sattend_class');
    var sattend_class = '';
    if(isSattend_class){
        var sattend_class = $('select.sattend_class').val();
    }
    return sattend_class;
}
/**
 * 获取家长姓名
 * @author peak lin
 */
function getPname() {
    var ispName = $('input').hasClass('pName');
    var pName = '';
    if(ispName){
        var pName = $('input.pName').val();
        if(!pName){
            msg('请输入家长姓名');return false;
        }        
    }
    return pName;
}
/**
 * 获取学生来源
 * @author peak lin
 */
function getSource() {
    var isSsource = $('input').hasClass('sSource');
    var sSource = '';
    if(isSsource){
        var sSource = $('input.sSource').val();
    }
    return sSource;
}
/**
 * 获取广告id
 * @author peak lin
 */
function getAdId() {
    var isadId = $('input').hasClass('adId');
    var adId = '';
    if(isadId){
        var adId = $('input.adId').val();
    }
    return adId;
}
/**
 * 获取验证码
 * @param msg 提示内容
 * @param code 提示状态 200 成功 201失败
 * @author peak lin
 */
function getSmsCode(job) {
        var _this = job;
        var codeStr = $(_this).html();
        //验证码发送禁止点击
        if(codeStr != '获取验证码') return false;
        //验证手机号
        var smsMobile = cfaSmsMobile();
        if(smsMobile === false) return false;
        var send_status = false;        
        //获取验证码倒计时
        var time = 60;
        $.ajax({
            type: "POST",
            url: "/index.php/index/sms/sends",
            data: "mobile="+smsMobile+"&type=-1",
            /*cache: false,
            async : false,*/
            dataType: "json",
            success: function(res){
                //只有发送成功了，才启用倒计时
                /*if(res.code == 200){
                    send_status = true;
                }else{
                    send_status = false;
                }*/
                msg(res.msg,res.code);
            }
        });
        //if(send_status){
            $(_this).css({
                'cursor':'not-allowed',
                'color':'#666'
            });
            $(_this).text('重新获取('+time+')');
            var codeTimer = setInterval(function () {
                time--;
                $(_this).text('重新获取('+time+')');
                if(time == 0){
                    isClickSendCode = false;
                    clearInterval(codeTimer);
                    $(_this).text('获取验证码').css({
                        'cursor':'pointer',
                        'color':'#2ec0ab'
                    });
                }
            },1000);
        //}
}
/**
 * 获取地址栏参数
 * @param name 参数名称
 * @author peak lin
 */
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
/**
 * js指定删除地址栏参数
 * @param url url地址
 * @param ref 要修改的参数名称
 * @param value 要修改的参数值
 * @author peak lin
 */
function setUrlParam(url,ref,value){
    var str = "";
    if (url.indexOf('?') != -1){
        str = url.substr(url.indexOf('?') + 1);
    }else{
        return url + "?" + ref + "=" + value;
    }
    var returnurl = "";
    var setparam = "";
    var arr;
    var modify = "0";
    if(str.indexOf('&') != -1){
        arr = str.split('&');
        for(i in arr) {
            if(arr[i].split('=')[0] == ref){
                setparam = value;
                modify = "1";
            }else{
                setparam = arr[i].split('=')[1];
            }
            returnurl = returnurl + arr[i].split('=')[0] + "=" + setparam + "&";
        }
        returnurl = returnurl.substr(0, returnurl.length - 1);
        if(modify == "0"){
            if (returnurl == str){
                returnurl = returnurl + "&" + ref + "=" + value;
            }
        }
    }else{
        if(str.indexOf('=') != -1){
            arr = str.split('=');
            if(arr[0] == ref){
                setparam = value;
                modify = "1";
            }else{
                setparam = arr[1];
            }
            returnurl = arr[0] + "=" + setparam;
            if(modify == "0"){
                if(returnurl == str){
                    returnurl = returnurl + "&" + ref + "=" + value;
                }
            }
        }else{
            returnurl = ref + "=" + value;
        }
    }
    return url.substr(0, url.indexOf('?')) + "?" + returnurl;
}


/**
 * js指定删除地址栏参数
 * @param url url地址
 * @param ref 参数名称
 * @author peak lin
 */
function deleteUrlParam(url, ref){
    var str = "";
    if(url.indexOf('?') != -1){
        str = url.substr(url.indexOf('?') + 1);
    }else{
        return url;
    }
    var arr = "";
    var returnurl = "";
    var setparam = "";
    if(str.indexOf('&') != -1){
        arr = str.split('&');
        for(i in arr){
            if(arr[i].split('=')[0] != ref) {
                returnurl = returnurl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
            }
        }
        return url.substr(0, url.indexOf('?')) + "?" + returnurl.substr(0, returnurl.length - 1);
    }else{
        arr = str.split('=');
        if(arr[0] == ref) {
            return url.substr(0, url.indexOf('?'));
        }else{
            return url;
        }
    }
}
/**
 * 手机号验证
 * @param phone 手机号
 * @author peak lin
 */
function checkMobile(phone) {
    var re = /^1[0-9]{10}$/;
    if (re.test(phone)) {
        return true;
    } else {
        return false;
    }
}
/**
 * 邮箱验证
 * @param email 邮箱
 * @author peak lin
 */
function checkEmail(email) {
    var re = /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/;
    if (re.test(email)) {
        return true;
    } else {
        return false;
    }
}
/**
 * 判断是否是微信浏览器的函数
 * @author peak lin
 */
function isWeiXin(){
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  var ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    return true;
  }else{
    return false;
  }
}
/**
 * 获取微信code授权url
 * @param scope 授权类型
 * @author peak lin
 */
function getOauthUrlForCode(scope){
    if(!scope){
        var scope = '';
    }
    var sUrl = location.href.split("#")[0];
    sUrl = sUrl.replace(/&/g, "###");
    $.ajax({
        type : "POST",
        url : "/index.php/weixin/home/getOauthUrlForCode",
        data : 'scope='+scope+'&sUrl='+encodeURI(sUrl),
        dataType : "json",
        success : function(data) {
            if(data.oauthUrl != ''){
                window.location.href=data.oauthUrl;//跳转url获取code
            }else{
                msg('获取code失败');
            }
        }
    });    
}
/**
 * 根据code获取用户微信信息
 * @param code 微信code
 * @author peak lin
 */
function getWeiXinUserInfo(code){
    if(code){
        $.ajax({
            type : "POST",
            url : "/index.php/weixin/home/getWeiXinUserInfo",
            data : 'code='+code,
            dataType : "text",
            async : false,
            success : function(data) {
                list = data;
            }
        });
        return list;
    }   
}
/**
 * 动态检查是否有登录
 * @author peak lin
 */
function islogin(){             
    $.ajax({
        type : "POST",
        url : "/index.php/index/home/isLogin",
        data : "",
        dataType : "text",
        async : false,
        success : function(data) {
            loginstatus = data;
        }
    });
    return loginstatus;     
}
/**
 * 检查openid是否有绑定手机号
 * @param openid 微信openid
 * @author peak lin
 */
function getOpenidBinding(openid){
    if(openid){
        $.ajax({
            type : "POST",
            url : "/index.php/weixin/home/getOpenidBinding",
            data : 'openid='+openid,
            dataType : "json",
            async : false,
            success : function(data) {
                if(data.code == 200){
                    status = 200;
                }else if(data.msg == '未绑定手机号'){
                    status = 202;
                }else{
                    status = data.msg;
                }
            }
        });
        return status;
    }   
}
/**
 * 检查openid是否有绑定手机号
 * @param openid 微信openid
 * @param presenId 转介绍id
 * @author peak lin
 */
function getPresentOpenidBinding(openid,presenId){
    if(openid && presenId){
        $.ajax({
            type : "POST",
            url : "/index.php/weixin/present/getPresentOpenidBinding",
            data : 'openid='+openid+'&presenId='+presenId,
            dataType : "json",
            async : false,
            success : function(data) {
                status = data.code;
            }
        });
        return status;
    }   
}

/**
 * 检查openid是否有绑定手机号
 * @param id 城市id
 * @param className 城市类
 * @param type 触发类型 0加载 1选中
 * @author peak lin
 */
function klzzSelectCity(id,className,type,address_id){
    $.ajax({
        type : "POST",
        url : "/api_admin.php/api/config/cityfour",
        data : "id="+id+"&all=",
        dataType : "json",
        async : false,
        success : function(data) {
            if(className == 'klzz-city' && type == 1){
                $('.klzz-district').html('');
            }
            if(data.code == 200){
                var datas = data.data;
                var str = '';
                $.each(datas,function(i,val){
                    if(address_id == val.value){
                        str +=  "<option value='" + val.value + "' selected>" + val.label + "</option>";
                    }else{
                        str +=  "<option value='" + val.value + "'>" + val.label + "</option>";
                    }                    
                })
                $('.'+className).html(str);
            }else{
                msg(data.msg);return false;
            }
        }
    });            
}
/**
 * 加载省市区
 * @param className 省市区父class
 * @param level 显示级层
 * @author peak lin
 */
function loadKlzzCity(className,level,province_id,city_id,district_id){
    if(className){
        $("."+className).html('<select class="klzz-province" onchange="return klzzSelectCity($(this).val(),\'klzz-city\',1);"></select>');
        klzzSelectCity(0,'klzz-province',0,province_id);
        if(level >= 2){
            $("."+className).append('<select class="klzz-city" onchange="return klzzSelectCity($(this).val(),\'klzz-district\',1);"></select>');
            klzzSelectCity($('.klzz-province').val(),'klzz-city',0,city_id);
        }
        if(level >= 3){
             $("."+className).append('<select class="klzz-district"></select>');
            klzzSelectCity($('.klzz-city').val(),'klzz-district',0,district_id);
        }
    }   
}