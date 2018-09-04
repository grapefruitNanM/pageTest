var testArgument=function(){
	if(arguments.length==0){
		document.getElementsByTagName('body')[0].append("empty");
	}
	else{
		document.getElementsByTagName('body')[0].append(arguments[0]+arguments[1]);
	}
	document.getElementsByTagName('body')[0].append("\t\t\t、-------"+arguments.length);
	document.write("<br>");
};

(function(){
	document.write("/*arguments类测试：<br>");
	testArgument();
	testArgument(1,452);
	testArgument("baby",2);
	var len=testArgument.length;
	document.write(len+"<br>");
	document.write("arguments类测试end--------------------------------*/<br>");
})();


var iBase=10;
function addNumbers(i1,i2){
	function doThings(){                       /*此函数是个闭包*/
		document.write(i1+i2+iBase+"<br>");
	}
	return doThings();
}

(function(){
	document.write("<br>/*闭包测试：<br>");
	document.write("<pre>var iBase=10;function addNumbers(i1,i2){\n\tfunction doThings(){/*此函数是个闭包*/\n\t\tdocument.write(i1+i2+iBase+\"br\");\n\t}\n\treturn doThings();\n}\naddNumbers();\naddNumbers(1,1);\n</pre>");
	addNumbers();
	addNumbers(1,1);
	document.write("闭包测试end--------------------------------*/<br>");
})();


/*   "构造函数"
------------------------------------------------------------------------- */
/*
工厂方式
------------------------*/
function createCar0(color,doors,mpg){
	var obj=new Object;
	obj.color=color;
	obj.doors=doors;
	obj.mpg=mpg;
	obj.showColor=function(){
		document.write(this.color+"<br>");
	};
	return obj;
}
/*
上面的方法会在每个对象实例创建时都创建一个新函数showColor
高级一点就变成：
-------------*/
function showCo(){
	document.write(this.color+"<br>");
}
function createCar1(color,doors,mpg){
	var obj=new Object;
	obj.color=color;
	obj.doors=doors;
	obj.mpg=mpg;
	obj.showColor=showCo;
	return obj;
}
/*
test
--------------*/
(function(){
	document.write("<br>/*工厂模式测试：<br>");
	var car1=createCar0("red",4,300);
	car1.showColor();
	var car3=createCar1("yellow",4,300);
	car3.showColor();
	var car4=createCar1("orange",4,300);
	car4.showColor();
	document.write(car4 instanceof createCar1);
	document.write("<br>");
	document.write("工厂模式测试end--------------------------------*/<br>");
})();


/*
构造函数方式
------------------------*/
function Car(color,doors,mpg){
	this.color=color;
	this.doors=doors;
	this.mpg=mpg;
	this.showColor=function(){
		document.write(this.color+"<br>");
	};
}
/*
但是，也会重复生成函数，虽然也可以把函数提出来写，但是语义上没有任何意义，于是引入了下面的原型方式
 */
/*
test
--------------*/
(function(){
	document.write("<br>/*构造函数模式测试：<br>");
	var car=new Car("red",4,300);
	car.showColor();
	document.write(car instanceof Car);
	document.write("<br>");
	document.write("构造函数模式测试end--------------------------------*/<br>");
})();


/*
原型方式
------------------------*/
function BigCar(){
}
BigCar.prototype.color="color";
BigCar.prototype.doors=4;
BigCar.prototype.mpg=300;
BigCar.prototype.driver=new Array("d1","d2");
BigCar.prototype.showColor=function(){
	document.write(this.color+"<br>");
};
/*
test
原型模式不能传递参数，并且，更改一个中的数组，其他所有实例的数组都被改变
--------------*/
(function(){
	document.write("<br>/*原型模式测试：<br>");
	var car=new BigCar();
	document.write(car.driver+"<br>");
	document.write(car instanceof BigCar);
	document.write("<br>");
	var car2=new BigCar();
	car.driver.push("d3");
	document.write(car.driver+"<br>");
	document.write(car2.driver+"<br>");
	document.write("原型模式测试end--------------------------------*/<br>");
})();


/*
混合的构造函数和原型方式
较好！！！！！
------------------------*/
function Carcar(color,doors,mpg){
	this.color=color;
	this.doors=doors;
	this.mpg=mpg;
	this.driver=new Array("d1","d2");
}
Carcar.prototype.showColor=function(){
	document.write(this.color+"<br>");
};
/*
test
--------------*/
(function(){
	document.write("<br>/*混合的构造函数和原型方式测试：<br>");
	var car=new Carcar("red");
	document.write(car.driver+"<br>");
	document.write(car instanceof Carcar);
	document.write("<br>");
	var car2=new Carcar("green");
	car.driver.push("d3");
	document.write(car.driver+"<br>");
	document.write(car2.driver+"<br>");
	car2.showColor();
	document.write("混合的构造函数和原型方式测试end--------------------------------*/<br>");
})();


/*
动态原型方式
较好！
------------------------*/
function Carcon(color,doors,mpg){
	this.color=color;
	this.doors=doors;
	this.mpg=mpg;
	this.driver=new Array("d1","d2");

	if(typeof Carcon._initialized=="undefined"){
		Carcon.prototype.showColor=function(){
			document.write(this.color+"<br>");
		};
	}
	Carcon._initialized=true;
}
/*
test
--------------*/
(function(){
	document.write("<br>/*动态原型方式测试：<br>");
	var car=new Carcon();
	document.write(car.driver+"<br>");
	document.write(car instanceof Carcon);
	document.write("<br>");
	var car2=new Carcon();
	car.driver.push("d3");
	document.write(car.driver+"<br>");
	document.write(car2.driver+"<br>");
	document.write("动态原型方式测试end--------------------------------*/<br>");
})();


/*
动态原型方式
较好！
------------------------*/
function Carcon(color,doors,mpg){
	this.color=color;
	this.doors=doors;
	this.mpg=mpg;
	this.driver=new Array("d1","d2");

	if(typeof Carcon._initialized=="undefined"){
		Carcon.prototype.showColor=function(){
			document.write(this.color+"<br>");
		};
	}
	Carcon._initialized=true;
}
/*
test
--------------*/
(function(){
	document.write("<br>/*动态原型方式测试：<br>");
	var car=new Carcon();
	document.write(car.driver+"<br>");
	document.write(car instanceof Carcon);
	document.write("<br>");
	var car2=new Carcon();
	car.driver.push("d3");
	document.write(car.driver+"<br>");
	document.write(car2.driver+"<br>");
	document.write("动态原型方式测试end--------------------------------*/<br>");
})();
