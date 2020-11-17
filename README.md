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

# CSS 屏蔽播放按钮，以及屏蔽设置入口
本项目需要emby账号拥有管理员权限

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E5%B1%8F%E8%94%BD%E6%8C%89%E9%92%AE%E7%9A%84CSS%E5%86%85%E5%AE%B9/CSS01.PNG">

可以通过CSS屏蔽设置入口和播放按钮（默认匹配简体中文界面）

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E5%B1%8F%E8%94%BD%E6%8C%89%E9%92%AE%E7%9A%84CSS%E5%86%85%E5%AE%B9/CSS02.PNG">

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E5%B1%8F%E8%94%BD%E6%8C%89%E9%92%AE%E7%9A%84CSS%E5%86%85%E5%AE%B9/CSS03.PNG">

（可选）完美屏蔽播放按钮还需要更改服务器的listview.js文件

路径

X:\EMBY sXerver\system\dashboard-ui\modules\listview\listview.js

/opt/emby-server/system/dashboard-ui/modules/listview/listview.js

查找resume替换为link，共两处

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E5%B1%8F%E8%94%BD%E6%8C%89%E9%92%AE%E7%9A%84CSS%E5%86%85%E5%AE%B9/CSS04.PNG">


# 直接改服务器程序，不用油猴插件
代码本来就在自己机器上，再用油猴调用js很膈应

直接修改index.html,调用js

路径

X:\EMBY sXerver\system\dashboard-ui\index.html

/opt/emby-server/system/dashboard-ui/index.html

在body里加一行
 
<script type="text/javascript" src="./mjj.js"></script> 

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E7%9B%B4%E6%8E%A5%E6%94%B9emby%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%96%87%E4%BB%B6/mjj01.PNG">

把mjj.js文件放入相同目录

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E7%9B%B4%E6%8E%A5%E6%94%B9emby%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%96%87%E4%BB%B6/mjj02.PNG">

mjj.js文件需要修改的内容，与油猴脚本基本一致。

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E7%9B%B4%E6%8E%A5%E6%94%B9emby%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%96%87%E4%BB%B6/mjj03.PNG?raw=true">

# 可能遇到的问题
replace()指令不生效

你的浏览器可能不支持该js指令，具体见

https://caniuse.com/?search=replace%20string
