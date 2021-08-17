// 在X:\EMBY server\system\dashboard-ui\index.html
// 或者/opt/emby-server/system/dashboard-ui/index.html
// 将index.html文件<body>里面添加一行
// <script type="text/javascript" src="./mjj.js"></script>
// 调用本js文件
// 把本mjj.js文件放到\EMBY server\system\dashboard-ui\目录下
// X:\EMBY server\system\dashboard-ui\mjj.js

// 要改的地方还挺多的，默认保留了调试弹窗。成功以后自行杠掉window.alert()
// 替换你的emby地址头部（和域名是有区别的，根据自己的结构，看情况情况加路径）
var embyUrl = "X:";
// 替换你的goindex地址头部（和域名是有区别的，根据自己的目录结构，看情况加路径）
var goindexUrl = "https://pan.hostloc.workers.dev";

//预览【goindex是?a】【oneindex是?s】【onemanage是?preview】自己选。默认没有，非蓝光目录，打开网盘会直接下载文件。
var yulan = ""
//var yulan = "?s"
//var yulan = "?a"
//var yulan = "?preview"

//调用jquery1.12.4，本地外网二选一。默认外网，本地的话，自己下载jquery.min.js到\EMBY server\system\dashboard-ui\目录
//本地
//document.write("<script type='text/javascript' src='./jquery.min.js'></script>"); 
//外网
//document.write("<script type='text/javascript' src='https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js'></script>"); 
//2021.1.21日更新，改到从index.html里调用jquery.min.js

//以下的代码基本不用动了，等调试成功，注释掉window.alert()就好了

//在时间内，重复调用Nplayer按钮函数
var timer1 = setInterval("nplayerButton()", 1)

//Nplayer按钮。按钮
function nplayerButton() {
    var mediaUrl = $("div[is='emby-scroller']:not(.hide) span.mediaInfoAttributeLabel:contains('路径')").siblings('span')[0];
    //判断是否进入了视频详细页面（剧集总览，和季预览页面不显示外链按钮），判断”媒体信息“里有没有”路径“一栏
    if(mediaUrl){
        //打印一个外链按钮
        var nplayer = $("div[is='emby-scroller']:not(.hide) .nplayer")[0];
        if(!nplayer){
            var mainDetailButtons = $("div[is='emby-scroller']:not(.hide) .mainDetailButtons")[0];
            if(mainDetailButtons){
                var html = mainDetailButtons.innerHTML;
                mainDetailButtons.innerHTML = `${html}<button is="emby-button" id="nplayer" type="button" class="detailButton emby-button nplayer" onclick="nplayeropen()"> <div class="detailButton-content"> <i class="md-icon detailButton-icon"></i>  <div class="detailButton-text">Nplayer播放</div> </div> </button>`;
                //按钮里面触发nplayeropen函数onclick="nplayeropen()"
            }
        }
    }
}

//Nplayer按钮。功能
function nplayeropen(){
    //获取emby路径mediaUrl
    var mediaUrl = $("div[is='emby-scroller']:not(.hide) span.mediaInfoAttributeLabel:contains('路径')").siblings('span')[0];
    //转换格式url
    var url = mediaUrl.innerHTML;
    window.alert("获取路径" + url);
    //echo 去掉路径的词头
    var oldurl0 = url.replace(embyUrl,"");
    window.alert("路径去头" + oldurl0);
    //第一次变化\换成/（emby搭在win主机的情况）oldurl0
    var oldurl1 = oldurl0.replaceAll("\\", "/");
    window.alert("反斜杠变斜杠" + oldurl1);
    //echo "替换冒号"."<br>".$oldurl2."<br>"."<br>";
    var oldurl2 = oldurl1.replaceAll(":","：");
    window.alert("小冒号变大冒号" + oldurl2);
    //echo "替换问号"."<br>".$oldurl3."<br>"."<br>";
    var oldurl3 = oldurl2.replaceAll("?", "？");
    window.alert("小问号变大问号" + oldurl3);

    //echo "替换&号"."<br>".$oldurl4."<br>"."<br>";
    var oldurl100 = oldurl3.replaceAll("&amp;", "%26");
    window.alert("&变&" + oldurl100);
    
    //echo "装上新前缀，还原网盘直连"."<br>".$newurl."<br>"."<br>";
    var newurl = goindexUrl + oldurl100;
    window.alert("前面加头" + newurl);

    //判断是不是蓝光目录
    var leixing = $("div[is='emby-scroller']:not(.hide) span.mediaInfoAttributeLabel:contains('容器')").siblings('span')[0];
	var leixing1 = leixing.innerHTML
	if (leixing1 === "bluray" ){
        ULTurl = newurl;
        window.alert("是蓝光目录，打开网盘" + ULTurl);
        window.alert("本视频格式为蓝光原盘目录，无法直接播放。请打开文件目录后，手动进入/BDMV/STREAM/子文件夹内，选择视频文件播放");
		window.open(ULTurl)
	}
	else{
        var ULTurl="nplayer-"+newurl;
        window.alert("可以直接播放" + ULTurl);
        window.open(ULTurl)
    }
}


//在时间内，重复调用potplayer按钮函数
var timer2 = setInterval("potplayerButton()", 2)

//potplayer按钮。按钮
function potplayerButton() {
    var mediaUrl = $("div[is='emby-scroller']:not(.hide) span.mediaInfoAttributeLabel:contains('路径')").siblings('span')[0];
    //判断是否进入了视频详细页面（剧集总览，和季预览页面不显示外链按钮），判断”媒体信息“里有没有”路径“一栏
    if(mediaUrl){
        //打印一个外链按钮
        var potplayer = $("div[is='emby-scroller']:not(.hide) .potplayer")[0];
        if(!potplayer){
            var mainDetailButtons = $("div[is='emby-scroller']:not(.hide) .mainDetailButtons")[0];
            if(mainDetailButtons){
                var html = mainDetailButtons.innerHTML;
                mainDetailButtons.innerHTML = `${html}<button is="emby-button" id="potplayer" type="button" class="detailButton emby-button potplayer" onclick="potplayeropen()"> <div class="detailButton-content"> <i class="md-icon detailButton-icon"></i>  <div class="detailButton-text">Potplayer播放</div> </div> </button>`;
                //按钮里面触发potplayeropen函数onclick="potplayeropen()"
            }
        }
    }
}

//potplayer按钮。功能
function potplayeropen(){
    //获取emby路径mediaUrl
    var mediaUrl = $("div[is='emby-scroller']:not(.hide) span.mediaInfoAttributeLabel:contains('路径')").siblings('span')[0];
    //转换格式url
    var url = mediaUrl.innerHTML;
    window.alert("获取路径" + url);
    //echo 去掉路径的词头
    var oldurl0 = url.replace(embyUrl,"");
    window.alert("路径去头" + oldurl0);
    //第一次变化\换成/（emby搭在win主机的情况）oldurl0
    var oldurl1 = oldurl0.replaceAll("\\", "/");
    window.alert("反斜杠变斜杠" + oldurl1);
    //echo "替换冒号"."<br>".$oldurl2."<br>"."<br>";
    var oldurl2 = oldurl1.replaceAll(":","：");
    window.alert("小冒号变大冒号" + oldurl2);
    //echo "替换问号"."<br>".$oldurl3."<br>"."<br>";
    var oldurl3 = oldurl2.replaceAll("?", "？");
    window.alert("小问号变大问号" + oldurl3);

    //echo "替换&号"."<br>".$oldurl4."<br>"."<br>";
    var oldurl100 = oldurl3.replaceAll("&amp;", "%26");
    window.alert("&变&" + oldurl100);
    
    //echo "装上新前缀，还原网盘直连"."<br>".$newurl."<br>"."<br>";
    var newurl = goindexUrl + oldurl100;
    window.alert("前面加头" + newurl);

    //判断是不是蓝光目录
    var leixing = $("div[is='emby-scroller']:not(.hide) span.mediaInfoAttributeLabel:contains('容器')").siblings('span')[0];
	var leixing1 = leixing.innerHTML
	if (leixing1 === "bluray" ){
        ULTurl = newurl;
        window.alert("是蓝光目录，打开网盘" + ULTurl);
        window.alert("本视频格式为蓝光原盘目录，无法直接播放。请打开文件目录后，手动进入/BDMV/STREAM/子文件夹内，选择视频文件播放");
		window.open(ULTurl)
	}
	else{
        var ULTurl="potplayer://"+newurl;
        window.alert("可以直接播放" + ULTurl);
        window.open(ULTurl)
    }
}


//在时间内，重复调用wangpan按钮函数
var timer3 = setInterval("wangpanButton()", 3)

//wangpan按钮。按钮
function wangpanButton() {
    var mediaUrl = $("div[is='emby-scroller']:not(.hide) span.mediaInfoAttributeLabel:contains('路径')").siblings('span')[0];
    //判断是否进入了视频详细页面（剧集总览，和季预览页面不显示外链按钮），判断”媒体信息“里有没有”路径“一栏
    if(mediaUrl){
        //打印一个外链按钮
        var wangpan = $("div[is='emby-scroller']:not(.hide) .wangpan")[0];
        if(!wangpan){
            var mainDetailButtons = $("div[is='emby-scroller']:not(.hide) .mainDetailButtons")[0];
            if(mainDetailButtons){
                var html = mainDetailButtons.innerHTML;
                mainDetailButtons.innerHTML = `${html}<button is="emby-button" id="wangpan" type="button" class="detailButton emby-button wangpan" onclick="wangpanopen()"> <div class="detailButton-content"> <i class="md-icon detailButton-icon"></i>  <div class="detailButton-text">打开网盘</div> </div> </button>`;
                //按钮里面触发wangpanopen函数onclick="wangpanopen()"
            }
        }
    }
}

//wangpan按钮。功能
function wangpanopen(){
    //获取emby路径mediaUrl
    var mediaUrl = $("div[is='emby-scroller']:not(.hide) span.mediaInfoAttributeLabel:contains('路径')").siblings('span')[0];
    //转换格式url
    var url = mediaUrl.innerHTML;
    window.alert("获取路径" + url);
    //echo 去掉路径的词头
    var oldurl0 = url.replace(embyUrl,"");
    window.alert("路径去头" + oldurl0);
    //第一次变化\换成/（emby搭在win主机的情况）oldurl0
    var oldurl1 = oldurl0.replaceAll("\\", "/");
    window.alert("反斜杠变斜杠" + oldurl1);
    //echo "替换冒号"."<br>".$oldurl2."<br>"."<br>";
    var oldurl2 = oldurl1.replaceAll(":","：");
    window.alert("小冒号变大冒号" + oldurl2);
    //echo "替换问号"."<br>".$oldurl3."<br>"."<br>";
    var oldurl3 = oldurl2.replaceAll("?", "？");
    window.alert("小问号变大问号" + oldurl3);

    //echo "替换&号"."<br>".$oldurl4."<br>"."<br>";
    var oldurl100 = oldurl3.replaceAll("&amp;", "%26");
    window.alert("&变&" + oldurl100);
    
    //echo "装上新前缀，还原网盘直连"."<br>".$newurl."<br>"."<br>";
    var newurl = goindexUrl + oldurl100;
    window.alert("前面加头" + newurl);

    //拼接potplayer头部，调用外部播放器

    var leixing = $("div[is='emby-scroller']:not(.hide) span.mediaInfoAttributeLabel:contains('容器')").siblings('span')[0];
	var leixing1 = leixing.innerHTML
	if (leixing1 === "bluray" ){
        ULTurl = newurl;
        window.alert("是蓝光目录，打开网盘" + ULTurl);
		window.open(ULTurl)
	}
	else{
        var ULTurl=newurl + yulan;
        window.alert("不是蓝光目录，后面加一个?预览，进入预览页面" + ULTurl);
        window.open(ULTurl)
    }
}
