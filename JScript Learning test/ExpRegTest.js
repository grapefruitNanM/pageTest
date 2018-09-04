/*
	正则测试
-----------------------------------------------------------*/
(function(){
	document.write("<br>/*正则测试：<br>");
	var reg1=/cat/;
	var s1="catCatcat";

	document.write("var reg1=/cat/;<br>var s1=\"catCatcat\";<br>reg1.test(s1)\t OutPut: "+reg1.test(s1)+"<br>");
//  string类有一个方法是match，传参为一个正则表达式，返回一个数组，里面存放不论大小写所有匹配的结果。
//  正则表达式是区分大小写的
	document.write("<br>");
	var s2="a bAt,a Cat,a fAt baT, a faT cat, BAt, bat";
	var reg2=/at/;
	document.write("<br>var reg1=/cat/;<br>var s2=\"a bAt,a Cat,a fAt baT, a faT cat, BAt, bat\";<br>s2.search(reg2)\t OutPut: "+s2.search(reg2)+"<br>");

	var reg3=/[bcf]at/gi;
	var res=s2.match(reg3);
	document.write("<br>var reg3=/[bcf]at/gi;<br>var s2=\"a bAt,a Cat,a fAt baT, a faT cat, BAt, bat\";<br>s2.match(reg3)\t OutPut: "+"<br>");
	for(var i=0;i<res.length;i++){
		document.write(res[i]+"<br>");
	}
	var reg4=/[^bc]at/gi;
	var res2=s2.match(reg4);
	document.write("<br>var reg4=/[^bc]at/gi;<br>var s2=\"a bAt,a Cat,a fAt baT, a faT cat, BAt, bat\";<br>s2.match(reg4)\t OutPut: "+"<br>");
	for(var i=0;i<res2.length;i++){
		document.write(res2[i]+"<br>");
	}
	var reg5=/([^bc]at)/gi;
	s2.match(reg5);
	document.write("<br>var reg5=/([^bc]at)/gi;<br>var s2=\"a bAt,a Cat,a fAt baT, a faT cat, BAt, bat\";<br>s2.match(reg5)\t OutPut: "+RegExp.$1+"<br>");

	var BadWords=/badword|anthorbadword/gi;
	var s3="This is a string using badword1 and badword2";
	var res3=s3.replace(BadWords,"****");
	document.write("<br>var BadWords=/badword|anthorbadword/gi;<br>var s3=\"This is a string using badword1 and badword2\";<br>var res3=s3.replace(BadWords,\"****\");\t OutPut: "+res3+"<br>");
	
	document.write("正则测试end--------------------------------*/<br>");
})();