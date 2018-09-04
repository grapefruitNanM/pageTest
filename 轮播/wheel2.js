//通过透明度更改达到轮播
'use strict';
//声明
var images=document.getElementById('photo').getElementsByTagName('img');
var preButton=document.getElementById('pre');
var afterButton=document.getElementById('after');
var spot=document.getElementById('wheel-spot').getElementsByTagName('div');
var num=images.length;
var count=0;
var play;

var init=function(){
	images[0].className='curr-img';
}
var show=function(k){
	images[count].className='curr-img trans-eff';
	images[k].className='trans-eff';
	spot[count].className='active-spot spot';
	spot[k].className='spot';
}
var autoWheel=function(){
	play=setInterval(function(){
		var j=count;
		count++;
		if (count==num){
			count=0;
		}
		show(j);
	},3000);
}
var stop=function(){
	clearInterval(play);
}
var preButtonClick=function(){
	var j=count;
	count--;
	if (count==-1){
		count=num-1;
	}
	show(j);
}
var afterButtonClick=function(){
	var j=count;
	count++;
	if (count==num){
		count=0;
	}
	show(j);
}

//函数调用
init();
autoWheel();
document.getElementById('photo').addEventListener("mouseover",stop,false);//不能直接用images.
document.getElementById('photo').addEventListener("mouseout",autoWheel,false);
preButton.addEventListener("click",preButtonClick);
afterButton.addEventListener("click",afterButtonClick);