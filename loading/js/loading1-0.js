'use strict'
var loading=document.getElementsByClassName('loadingContainer');
var loadingfadeout= function(){
	loading.style.visibility="hidden";
}
var images=["https://9.url.cn/edu/user/index/node_modules/@tencent/im-edu-ui/img/bg/index-sprite3_7baeafd.png#unsprite",
"https://9.url.cn/edu/user/index/node_modules/@tencent/im-edu-ui/img/bg/index-sprite3_7baeafd.png#unsprite",
"https://9.url.cn/edu/user/index/node_modules/@tencent/im-edu-ui/img/bg/index-sprite3_7baeafd.png#unsprite",
"https://9.url.cn/edu/user/index/node_modules/@tencent/im-edu-ui/img/bg/index-sprite3_7baeafd.png#unsprite"];

var resourceHelper={
	imagesLoader: function(src,callback){
		var image=new Image();
		image.addEventListener('load',callback);
		image.addEventListener('error',function(e){
			console.error('img error',e);
		});
		image.src=src;
		return image;
	},
	load: function(images,callback){
		images=images||[];
		var total=images.length;
		if(total==0){
			return callback([]);
		}
		var finish=0;
		this.images=[];
		var self=this;
		for(var i=0;i<images.length;i++){
			var src=images[i];
			self.images[i]=self.imagesLoader(src,function(){
				finish++;
				if(finish==total){
					callback(self.images);
				}
			})
		}
	}
};
resourceHelper.load(images,function(result){
	loadingfadeout();
})