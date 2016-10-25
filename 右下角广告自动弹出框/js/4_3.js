var adv={
	DURA:2000,//总时长
	STEPS:100,//总步数
	interval:0, //时间间隔
	step:0, //每步距离
	height:0, //div的高
	div:null, //广告div
	timer:null, //保存当前定时器的序号
	wait:5000, //下降后等待上升的时间

	init:function(){//初始化必要属性
		var self=this; //this-->adv
		//interval=DURA/STEPS
		self.interval=self.DURA/self.STEPS;
		//找到id为msg的div保存在div属性中
		self.div=document.getElementById("msg");
		//获取div计算后的height值,去单位，保存在height属性中
		self.height=parseFloat(
			getComputedStyle(self.div).height);
		//step=height/STEPS
		self.step=self.height/self.STEPS;
		var a=document.querySelector("#msg>a");
		a.onclick=function(){//this-->a
			//启动前，先停止旧的定时器，防止叠加
			clearTimeout(self.timer);
			self.moveDown();//self-->adv
		}
	},
	moveDown:function(){//this-->adv
		var self=this;
		var bottom=
			parseFloat(getComputedStyle(self.div).bottom);
		self.div.style.bottom=(bottom-=self.step)+"px";
		if(bottom>-self.height){
			//如果bottom>div的高，就启动下次等待
			self.timer=setTimeout(function(){
				self.moveDown();
			},self.interval);
		}else{//启动等待，传入moveUp和wait
			setTimeout(function(){
				self.moveUp();
			},self.wait);
		}
	},
	moveUp:function(){//向上移动一步
		var self=this;//this-->adv
		//获得div当前计算后的bottom值，去单位，保存在变量bottom中
		var bottom=
			parseFloat(getComputedStyle(self.div).bottom);
		//将div的bottom值设置为bottom+step
		self.div.style.bottom=(bottom+=self.step)+"px";
		if(bottom<0){//如果bottom<0，就启动下次等待
			self.timer=setTimeout(function(){
				self.moveUp();
			},this.interval);
		}
	}
	
}
window.onload=function(){
	adv.init();
	adv.moveUp();
}