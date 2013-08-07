  //判断是否为数组
    function isArray(v)
    {
        return v && typeof v.length == 'number' && typeof v.splice == 'function';
    }
    //创建元素
    function createEle(tagName)
    {
        return document.createElement(tagName);
    }
    //在body中添加子元素
    function appChild(eleName)
    {
        return document.body.appendChild(eleName);
    }
    //从body中移除子元素
    function remChild(eleName)
    {
        return document.body.removeChild(eleName);
    }
    //弹出窗口，标题（html形式）、html、宽度、高度、是否为模式对话框(true,false)、按钮（关闭按钮为默认，格式为['按钮1',fun1,'按钮2',fun2]数组形式，前面为按钮值，后面为按钮onclick事件）
    function showWindow(title,html,width,height,modal,buttons)
    {
        //避免窗体过小
        if (width < 150)
        {
            width = 150;
        }
        if (height < 100)
        {
            height = 100;
        }
        
        //声明mask的宽度和高度（也即整个屏幕的宽度和高度）
        var w,h;
        //可见区域宽度和高度
        var cw = document.body.clientWidth;
        var ch = document.body.clientHeight;
        //正文的宽度和高度 
        var sw = document.body.scrollWidth;
        var sh = document.body.scrollHeight;
        //可见区域顶部距离body顶部和左边距离
        var st = document.body.scrollTop;
        var sl = document.body.scrollLeft;
     
        w = cw > sw ? cw:sw;
        h = ch > sh ? ch:sh;

        //避免窗体过大
        if (width > w)
        {
            width = w;
        }
        if (height > h)
        {
            height = h;
        }
        
        //如果modal为true，即模式对话框的话，就要创建一透明的掩膜
        if (modal)
        {
            var mask = createEle('div');
            mask.style.cssText = "position:absolute;left:0;top:0px;background:pink;filter:Alpha(Opacity=80);opacity:0.2;z-index:100;width:" + w + "px;height:" + h + "px;";
            appChild(mask);
        }
        
        //这是主窗体
        var win = createEle('div');
        win.style.cssText = "position:absolute;left:" + (sl + cw/2 - width/2) + "px;top:" + (st + ch/2 - height/2) + "px;background:white;z-index:101;width:" + width + "px;height:" + height + "px;border:ridge 3px #ff00ff;";
        //标题栏
        var tBar = createEle('div');
        //afccfe,dce8ff,2b2f79
        tBar.style.cssText = "margin:0;font-family:微软雅黑, Arial; width:" + width + "px;height:35px;background:url(top-bottom.png);cursor:move;";
        //标题栏中的文字部分
        var titleCon = createEle('div');
        titleCon.style.cssText = "float:left; margin-left:110px; font-family:微软雅黑, Arial; ";
        titleCon.innerHTML = title;//firefox不支持innerText，所以这里用innerHTML
        tBar.appendChild(titleCon);
        //标题栏中的“关闭按钮”
        var closeCon = createEle('div');
        closeCon.style.cssText = "float:right; width:20px; font-family:微软雅黑, Arial; margin:3px;cursor:pointer;";//cursor:hand在firefox中不可用
        closeCon.innerHTML = "×";
        tBar.appendChild(closeCon);
        win.appendChild(tBar);
        //窗体的内容部分，CSS中的overflow使得当内容大小超过此范围时，会出现滚动条
        var htmlCon = createEle('div');
        htmlCon.style.cssText = "float:left; font-family:微软雅黑, Arial; width:" + width + "px;height:" + (height-80) + "px;overflow:auto;";
        htmlCon.innerHTML = html;
        win.appendChild(htmlCon);
        //窗体底部的按钮部分
        var btnCon = createEle('div');
        btnCon.style.cssText = "width:" + width + "px;height:50px;text-height:40px;font-family:微软雅黑, Arial; background:url(top-bottom.png);float:left; padding-left:110px; margin-top:5px;";
        
        //如果参数buttons为数组的话，就会创建自定义按钮
        if (isArray(buttons))
        {
            var length = buttons.length;
            if (length > 0)
            {
                if (length % 2 == 0)
                {
                    for (var i = 0; i < length; i = i + 2)
                    {
                        //按钮数组
                        var btn = createEle('button');
                        btn.innerHTML = buttons[i];//firefox不支持value属性，所以这里用innerHTML
                        btn.value = buttons[i];
                        btn.onclick = buttons[i + 1];
                        btnCon.appendChild(btn);
                        //用户填充按钮之间的空白
                        var nbsp = createEle('label');
                        nbsp.innerHTML = "&nbsp&nbsp";
                        btnCon.appendChild(nbsp);
                    }
                }
            }
        }
       //这是默认的关闭按钮
        var btn = createEle('button');
        btn.setAttribute("value","不删除");
        btn.innerHTML = "不删除";
        btn.value = '不删除';
        btnCon.appendChild(btn);
        win.appendChild(btnCon);
        appChild(win);
        
        //获取浏览器事件的方法，兼容ie和firefox
        function getEvent()
        {
            return window.event || arguments.callee.caller.arguments[0];
        }
        
        //顶部的标题栏和底部的按钮栏中的“关闭按钮”的关闭事件
        btn.onclick = closeCon.onclick = function()
        {
            remChild(win);
            if (mask)
            {
                remChild(mask);
            }
        }
    }

   
    function show()
    {
        var str = "<div><div style='border-top:dashed 1px blue;border-bottom:dashed 1px blue; border-left:none; border-right:none;'><table cellspacing='2' style='width:350px; height:100px'>";
        str += "<tr><td  colspan='5' style='text-align:center'>亲！你确定要删除本日志？？" + "</td></tr>";
        str += "</table></div></div>";
        showWindow('MSpace Check！！',str,360,200,true,['确定删除',fun1]);
    }

 // 下面可以编写一个函数实现“确定删除”按钮的功能
    function fun1(){ }