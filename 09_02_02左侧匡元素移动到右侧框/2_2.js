var countries={
	unsel:null,
	sel:null,
	unselArr:[],
	selArr:[],
	init:function(){
		//找到id为unsel的select元素对象保存在unsel中
		this.unsel=document.getElementById("unsel");
		//找到id为sel的select元素对象保存在sel中
		this.sel=document.getElementById("sel")
		//获得unsel的内容，先删除开头的空字符和<option>
		//                 在删除结尾的</option>和空字符
		//			    按</option>和空字符和<option>切割
		//              将切割后的数组赋值给unselArr
		//-->select
							//-->string
		this.unselArr=unsel.innerHTML.replace(/^\s*<option>/,"").replace(/<\/option>\s*$/,"").split(/<\/option>\s*<option>/);
		console.log(this.unselArr);
		
	},
	move:function(btn){
		switch(btn.innerHTML){
			case "&gt;&gt;":
				//将unselArr拼接到selArr中，结果保存到selArr中
				this.selArr=this.selArr.concat(this.unselArr);
				//将unselArr设置为空
				this.unselArr=[];
			break;
			case "&lt;&lt;":
				this.unselArr=this.unselArr.concat(this.selArr);
				this.selArr=[];
			break;
			//右移
			case "&gt;":
				var opts=this.unsel.getElementsByTagName("option");
				var len=opts.length;
				for(var i=len-1;i>=0;i--){
					if(opts[i].selected){
						this.selArr.push(this.unselArr.splice(i,1));
					}
				}
				//获取unsel中所有option，保存在变量opts
					//从后向前遍历opts
					//	如果当前option被选中
					//		从unselArr中删除相同位置的元素，同时将删除的元素压入selArr中
					//获取unsel中所有option，保存在变量opts
			break;/**/
			case "&lt;":
			var opts=this.sel.getElementsByTagName("option");
			var len=opts.length-1;
			for(;len>=0;len--){
				if(opts[len].selected){
					this.unselArr.push(this.selArr.splice(len,1));
				}
			}
			
		}
		this.updateView();
	},
	updateView:function(){
		//如果unselArr的长度不为0
		//将unselArr按默认排序
		//	用</option><option>拼接unselArr,再前加<option>,后加</option>，将结果放入unsel的内容中
			//否则
			//将unsel内容设置为""
		//如果selArr的长度不为0
		//  将selArr按默认排序
		//	用</option><option>拼接selArr,再前加<option>,后加</option>，将结果放入sel的内容中
			//否则
			//将sel的内容设置为""
		if(this.unselArr.length!=0){
			this.unselArr.sort();
			this.unsel.innerHTML="<option>"+this.unselArr.join("</option><option>")+"</option>";
		}else{
			this.unsel.innerHTML="";
		}
		if(this.selArr.length!=0){
			this.selArr.sort();
			this.sel.innerHTML="<option>"+this.selArr.join("</option><option>")+"</option>";
		}else{
			this.sel.innerHTML="";
		}
	}

}
window.onload=function(){
	countries.init();
}