/*
navigator对象(非标准)
--------------*/
(function(){
	document.write("<br>/*navigator测试：<br>");
	document.write("appCodeName  浏览器代码名:");
	document.write(navigator.appCodeName);
	document.write("<br>");
	document.write("appName  官方浏览器名:");
	document.write(navigator.appName);
	document.write("<br>");
	document.write("appVersion  浏览器版本:");
	document.write(navigator.appVersion);
	document.write("<br>");
	document.write("cookieEnabled  是否使用了coockie:");
	document.write(navigator.cookieEnabled);
	document.write("<br>");
	document.write("platform  运行浏览器的平台:");
	document.write(navigator.platform);
	document.write("<br>");
	document.write("userAgent  用户代理头字符串:");
	document.write(navigator.userAgent);
	document.write("<br>");
	document.write("navigator测试end--------------------------------*/<br>");
})();

/*
screen对象
--------------*/
(function(){
	document.write("<br>/*screen测试：<br>");
	document.write("availHeight  窗口可以使用的屏幕宽度:");
	document.write(screen.availHeight);
	document.write("<br>");
	document.write("availWidth  窗口可以使用的屏幕高度:");
	document.write(screen.availWidth);
	document.write("<br>");
	document.write("colorDepth  用户表示颜色的位数:");
	document.write(screen.colorDepth);
	document.write("<br>");
	document.write("height  屏幕的高度:");
	document.write(screen.height);
	document.write("<br>");
	document.write("width  屏幕的宽度:");
	document.write(screen.width);
	document.write("<br>");
	document.write("screen测试end--------------------------------*/<br>");
})();