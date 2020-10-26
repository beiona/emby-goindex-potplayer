// ==UserScript==
// @name         emby-goindex-potplayer
// @namespace    mjj
// @version      1.0
// @description  EMBY和Goindex挂载同一个谷歌网盘，目录结构基本一样。替换emby视频路径，直接调用potplayer播放网盘内的视频。
// @author       beiona
// @match		 http://localhost:8096/
// @include	     *:8*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// ==/UserScript==


// 替换你的emby地址头部
var embyUrl = "X:/EMBY底部显示的链接头部";
// 替换你的goindex地址头部
var goindexUrl = "https://你搭建Goindex网盘.的地址.workers.dev";

var timer = setInterval(function() {
    var potplayer = $("div[is='emby-scroller']:not(.hide) .potplayer")[0];
    if(!potplayer){
        var mainDetailButtons = $("div[is='emby-scroller']:not(.hide) .mainDetailButtons")[0];
        if(mainDetailButtons){
              var html = mainDetailButtons.innerHTML;
              mainDetailButtons.innerHTML = html+'<button is="emby-button" id="potPlayer" type="button" class="detailButton detailButton-hidemobile emby-button potplayer" > <div class="detailButton-content"> <i class="md-icon detailButton-icon"></i>  <div class="detailButton-text">PotPlayer</div> </div> </button>';
        }

    }
}, 1000)
$(document).on('click', '#potPlayer', function(e) {
//获取emby视频路径
    var mediaUrl = $("div[is='emby-scroller']:not(.hide) span.mediaInfoAttributeLabel:contains('路径')").siblings('span')[0];
//拼接potplayer头部，调用外部播放器
    var url="potplayer://"+mediaUrl.innerHTML;
//第一次变化\换成/（emby搭在win主机的情况）
    var newurl = url.replaceAll("\\", "/");
//第二次变化将emby地址头部，替换成goindex地址头部，生成最终地址
    var ULTurl = newurl.replace(embyUrl,goindexUrl);
    window.open(ULTurl)
})