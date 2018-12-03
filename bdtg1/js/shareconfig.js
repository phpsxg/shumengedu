/**
 * 微信js分享
 * @param s_domain 请求获取微信分享配置域名
 * @author peak lin
 */
if(typeof(s_domain) == "undefined" ) {
  var host = window.location.host;
  var s_domain = host.replace('m.', 'www.');
}
getconfig();
function getconfig(){
    var sUrl = location.href.split("#")[0];   
    sUrl = sUrl.replace(/&/g, "###");
    $.ajax({
        type: "POST",
        url: 'https://'+s_domain+'/api_index.php/weixin/index/shareConf',
        data: "sUrl="+encodeURI(sUrl),
        success: function(res){
            if(res.code == 200){
              var title = s_title ? s_title : res.shareInfo.title;
              var desc = s_desc ? s_desc : res.shareInfo.desc;
              var link = s_link ? s_link : res.shareInfo.link;
              var imgurl = s_imgurl ? s_imgurl : res.shareInfo.imgurl;
              var appId = res.signPackage.appId;
              var timestamp = res.signPackage.timestamp;
              var nonceStr = res.signPackage.nonceStr;
              var signature = res.signPackage.signature;
              if(link.indexOf("from=") > -1){
                //删除分享链接from参数
                  link = deleteUrlParam(link,'from');
              }
              if(link.indexOf("isappinstalled=") > -1){
                //删除分享链接isappinstalled参数
                  link = deleteUrlParam(link,'isappinstalled');                        
              }
              if(link.indexOf("code=") > -1){
                //删除分享链接code参数
                  link = deleteUrlParam(link,'code');                        
              }
              if(link.indexOf("state=") > -1){
                //删除分享链接code参数
                  link = deleteUrlParam(link,'state');                        
              }                       
              shareConfig(title,desc,link,imgurl,appId,timestamp,nonceStr,signature);
            }                
        }
    });      
}
function shareConfig(title,desc,link,imgurl,appId,timestamp,nonceStr,signature){
    wx.config({
      debug: false,//// 调试模式,会打印所有调用返回icon
      appId: appId,
      timestamp: timestamp,// 时间戳
      nonceStr: nonceStr,// 随机串
      signature: signature,// 签名
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareQZone',
        'onMenuShareWeibo'
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function () {
      //分享到朋友圈
      wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: link, // 分享链接,将当前登录用户转为puid,以便于发展下线
        imgUrl: imgurl, // 分享图标
        success: function () {          
        },
        cancel: function () { 
        }
      });
      //分享给朋友
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接,将当前登录用户转为puid,以便于发展下线
        imgUrl: imgurl, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () { 
        },
        cancel: function () { 
        }
      });
      //分享给手机QQ
      wx.onMenuShareQQ({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接,将当前登录用户转为puid,以便于发展下线
        imgUrl: imgurl, // 分享图标
        success: function (res) {
        },
        cancel: function () {
        },
        fail: function (res) {
        }
      });
      //分享到QQ空间
      wx.onMenuShareQZone({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接,将当前登录用户转为puid,以便于发展下线
        imgUrl: imgurl, // 分享图标
        success: function (re) { 
        },
        cancel: function () { 
        }
      });
    });      
}
/**
 * js指定删除地址栏参数
 * @param url url地址
 * @param ref 参数名称
 * @author peak lin
 */
function shareDeleteUrlParam(url, ref){
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