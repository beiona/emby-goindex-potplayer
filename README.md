# 效果
EMBY和Goindex挂载同一个谷歌网盘，目录结构基本一样。
替换emby视频路径，直接调用potplayer播放网盘内的视频。

按按钮调用potplayer，播放网盘直链

<img width="658" alt="image" src="https://raw.githubusercontent.com/beiona/emby-goindex-potplayer/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer01.PNG">

<img width="658" alt="image" src="https://raw.githubusercontent.com/beiona/emby-goindex-potplayer/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer02.PNG">


# 油猴脚本

根据emby挂载的本地路径，和goindex挂载的网址路径

<img width="658" alt="image" src="https://raw.githubusercontent.com/beiona/emby-goindex-potplayer/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer03.PNG">

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer04.png">


提取不同的地址头部

<img width="658" alt="image" src="https://raw.githubusercontent.com/beiona/emby-goindex-potplayer/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer07.PNG">

（可选）根据你的网盘程序选择预览页面的后缀。可以避免点击“打开网盘”按钮后，直接下载文件。

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer05.png?raw=true">





替换油猴脚本14和16行（以及19-22行，四选一）

<img width="658" alt="image" src="https://raw.githubusercontent.com/beiona/emby-goindex-potplayer/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer06.PNG">
