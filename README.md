# 请移步新版本，此项目不再更新
https://github.com/beiona/EMBY-direct-link-player

# 感谢各位mjj对本项目的支持与帮助

# 新版版emby把媒体信息的标签移除了，所以无法使用。请配合4.4.3版本的emby使用
https://github.com/MediaBrowser/Emby.Releases/releases/tag/4.4.3.0

# 效果
EMBY和Goindex挂载同一个谷歌网盘，目录结构基本一样。
替换emby视频路径，直接调用potplayer播放网盘内的视频。

按按钮调用potplayer，播放网盘直链

<img width="658" alt="image" src="https://raw.githubusercontent.com/beiona/emby-goindex-potplayer/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer01.PNG">

<img width="658" alt="image" src="https://raw.githubusercontent.com/beiona/emby-goindex-potplayer/main/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC/emby-goindex-potplayer02.PNG">


# 油猴脚本

https://greasyfork.org/zh-CN/scripts/414769-emby-goindex-potplayer

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

设置入口http://localhost:8096/web/index.html#!/dashboardgeneral.html

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

在body里加两行

第一行调用mjj.js
<script type="text/javascript" src="./mjj.js"></script>

再加一行，调用jquery.min.js
<script type='text/javascript' src='https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js'></script>
2021.1.21日修改，chrome浏览器会拦截mjj.js里调用的jquery，改到从index.html里调用
<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E7%9B%B4%E6%8E%A5%E6%94%B9emby%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%96%87%E4%BB%B6/mjj01改.PNG">

把mjj.js文件放入相同目录

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E7%9B%B4%E6%8E%A5%E6%94%B9emby%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%96%87%E4%BB%B6/mjj02.PNG">

mjj.js文件需要修改的内容，与油猴脚本基本一致。

<img width="658" alt="image" src="https://github.com/beiona/emby-goindex-potplayer/blob/main/%E7%9B%B4%E6%8E%A5%E6%94%B9emby%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%96%87%E4%BB%B6/mjj03.PNG?raw=true">

# 可能遇到的问题
replace()指令不生效

你的浏览器可能不支持该js指令，具体见

https://caniuse.com/?search=replace%20string
