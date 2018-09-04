/*
	封装StringBuffer类
---------------------------------------------------------*/
function StringBuffer(){
	this._string_=new Array;
}
StringBuffer.prototype.add = function(str) {
	this._string_.push(str);
};
StringBuffer.prototype.toString = function() {
	return this._string_.join("");
};

/*
	测试
-----------------------------------------------------------*/
(function(){
	document.write("<br>/*StringBuffer测试：<br>");
	var res=new StringBuffer();
	res.add("hello");
	res.add(" !");
	var output=res.toString();
	document.write(output+"<br>");
	document.write("StringBuffer测试end--------------------------------*/<br>");
})();