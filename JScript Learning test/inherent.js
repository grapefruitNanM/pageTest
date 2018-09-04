/*
1. 混合模式   不支持多继承！！！
-----------------------------------*/
function ClassA(color){
	this.color=color;
}
ClassA.prototype.show = function() {
	document.write(this.color+"<br>");
};

function ClassB(color,name){
	// this.newMethod=ClassA;
	// this.newMethod(color);
	// delete newMethod;
	ClassA.call(this,color);  //也可以使用apply(this,arguments); ！！！！
	/*子类新属性/ 所有新属性和方法都必须在删除了对父类的引用后定义，否则有可能对父类进行覆盖改写*/
	this.name=name;
}
ClassB.prototype=new ClassA();//原型链不向构造函数中传递参数！！！！！
ClassB.prototype.print = function() {
	document.write(this.name+"<br>");
};

/*
test
--------------*/
(function(){
	document.write("<br>/*混合模式继承测试：<br>");
	var a=new ClassA("red");
	a.show();
	var b=new ClassB("orange","123");
	b.show();
	b.print();
	document.write(b instanceof ClassA);
	document.write("<br>");
	document.write("混合模式继承测试end--------------------------------*/<br>");
})();


/*
2. 对象冒充模式   支持多继承！！！
-----------------------------------*/
function ClassAA(color){
	this.color=color;
	this.show = function() {
		document.write(this.color+"<br>");
	};
}

function ClassBB(name){
	this.name=name;
	this.print = function() {
		document.write(this.name+"<br>");
	};
}

function ClassCC(color,name){
	// this.newMethod=ClassA;
	// this.newMethod(color);
	// delete newMethod;
	ClassAA.call(this,color);
	ClassBB.call(this,name);
}

/*
test
--------------*/
(function(){
	document.write("<br>/*对象冒充模式继承测试：<br>");
	var a=new ClassAA("red");
	a.show();
	var b=new ClassBB("123");
	b.print();
	var c=new ClassCC("orange","456");
	c.print();
	c.show();
	document.write(c instanceof ClassBB);
	document.write("<br>");
	document.write(c instanceof ClassAA);
	document.write("<br>");
	document.write("对象冒充模式继承测试end--------------------------------*/<br>");
})();