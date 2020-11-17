// ==UserScript==
// @name         emby-goindex-potplayer
// @namespace    mjj
// @version      1.2
// @description  EMBY和Goindex挂载同一个谷歌网盘，目录结构基本一样。替换emby视频路径，直接调用potplayer播放网盘内的视频。
// @author       beiona
// @include      *://localhost:8096/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// ==/UserScript==

// 要改的地方还挺多的，默认保留了弹窗。成功以后自行杠掉window.alert()
// 替换你的emby地址头部（和域名是有区别的，根据自己的结构，看情况情况加路径）
var embyUrl = "X:";
// 替换你的goindex地址头部（和域名是有区别的，根据自己的目录结构，看情况加路径）
var goindexUrl = "https://pan.hostloc.workers.dev";

//预览【goindex是?a】【oneindex是?s】【onemanage是?preview】自己选。默认没有，非蓝光目录打开网盘会直接下载文件。
var yulan = ""
//var yulan = "?s"
//var yulan = "?a"
//var yulan = "?preview"

////////////////////////////////////////////////////////下面的一般不用动。等调试成功，注释掉window.alert()就好了

//Nplayer按钮。按钮
var timer1 = setInterval(function() {
    var nplayer = $("div[is='emby-scroller']:not(.hide) .nplayer")[0];
    if(!nplayer){
        var mainDetailButtons = $("div[is='emby-scroller']:not(.hide) .mainDetailButtons")[0];
        if(mainDetailButtons){
              var html = mainDetailButtons.innerHTML;
              mainDetailButtons.innerHTML = html+'<button is="emby-button" id="nplayer" type="button" class="detailButton detailButton-hidemobile emby-button nplayer" > <div class="detailButton-content"> <i class="md-icon detailButton-icon"></i>  <div class="detailButton-text">Nplayer</div> </div> </button>';
        }
    }
}, 10)

//Nplayer按钮。功能
$(document).on('click', '#nplayer', function(e) {
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
})

//potplayer按钮。按钮
var timer = setInterval(function() {
    var potplayer = $("div[is='emby-scroller']:not(.hide) .potplayer")[0];
    if(!potplayer){
        var mainDetailButtons = $("div[is='emby-scroller']:not(.hide) .mainDetailButtons")[0];
        if(mainDetailButtons){
              var html = mainDetailButtons.innerHTML;
              mainDetailButtons.innerHTML = html+'<button is="emby-button" id="potPlayer" type="button" class="detailButton detailButton-hidemobile emby-button potplayer" > <div class="detailButton-content"> <i class="md-icon detailButton-icon"></i>  <div class="detailButton-text">PotPlayer</div> </div> </button>';
        }
    }
}, 10)

//potplayer按钮。功能
$(document).on('click', '#potPlayer', function(e) {
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
})



//由于emby无法索引蓝光目录，所以增加了一个直接打开网盘地址的按钮。按钮
var timer2 = setInterval(function() {
    var blueray = $("div[is='emby-scroller']:not(.hide) .blueray")[0];
    if(!blueray){
        var mainDetailButtons = $("div[is='emby-scroller']:not(.hide) .mainDetailButtons")[0];
        if(mainDetailButtons){
              var html = mainDetailButtons.innerHTML;
              mainDetailButtons.innerHTML = html+'<button is="emby-button" id="blueray" type="button" class="detailButton emby-button blueray" > <div class="detailButton-content"> <i class="md-icon detailButton-icon"></i> <div class="detailButton-text">打开网盘</div> <div class="detailButton-text"></div> </div> </button>';
        }
    }
}, 10)

//由于emby无法索引蓝光目录，所以增加了一个直接打开网盘地址的按钮。功能
$(document).on('click', '#blueray', function(e) {
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
})