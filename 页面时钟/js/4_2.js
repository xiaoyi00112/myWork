var clock={
	divH:null,//时针对象
	divM:null,//分针对象
	divS:null,//秒针对象
	start:function(){//启动时钟的方法
		var self=this;//留住this
		//找到id为h,m,s的三个div，分别保存在divH，divM，divS中
		var divs=document.querySelectorAll("#h,#m,#s");
		self.divH=divs[0];
		self.divM=divs[1];
		self.divS=divs[2];
		//先调用一次calc方法
		self.calc();
		//启动周期性定时器，传入匿名函数封装的calc调用，和1000毫秒
		setInterval(function(){ self.calc(); },1000);
		//setInterval(this.calc.bind(this),1000);
	},
	calc:function(){//每一秒计算一次指针的角度
		//获得当前时间
		var now=new Date();
		//获得小时，分，秒，分别保存在变量h，m，s中
		var h=now.getHours();
		var m=now.getMinutes();
		var s=now.getSeconds();
		//如果h>12,就-12
		h>12&&(h-=12);
		//分别计算秒针，分针，时针的角度，保存在变量sdeg，mdeg，hdeg中
		var sdeg=s*6;
		var mdeg=m*6+sdeg/60;
		var hdeg=h*30+mdeg/12;
		//分别设置divH，divM，divS的style的transform属性为"rotate(hdeg)"，"rotate(mdeg)"，"rotate(sdeg)"
		this.divH.style.transform="rotate("+hdeg+"deg)";
		this.divM.style.transform="rotate("+mdeg+"deg)";
		this.divS.style.transform="rotate("+sdeg+"deg)";
	}
}
window.onload=function(){
	clock.start();
}