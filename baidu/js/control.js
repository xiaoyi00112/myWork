/**
 * Created by yan on 2016/10/11.
 */

window.$=HTMLElement.prototype.$=function(selector){
  var elems=(this==window?document:this).querySelectorAll(selector);
  if(!elems){
    return null;
  }else if(elems.length==1){
    return elems[0];
  }else{
    return elems;
  }
}
// 当页面加载时执行
window.onload=function(){
  // 设置
  var settings=$("#userS");
  settings.onmouseover=settings.onmouseout=function(){
    var set=$("#userS").$(".userSetting");
    if(set.style.display=="block"){
      set.style.display="none";
    }else{
      set.style.display="block";
    }
  }
  //更多产品
  $("#moreP").onmouseover=function(){
    $("#moreProduction").style.display="block";
  }
  $("#moreProduction").addEventListener("mouseleave",function(){
    $("#moreProduction").style.display="none";
  },false);

  //搜索框
  $("#searchBox").onmouseover=function(){bdColor(this,'#999');}
  $("#searchBox").onmouseout=function(){bdColor(this,'#bbb');}
  //获得焦点搜索框边框颜色
  $("#searchInput").onfocus=function(){bFocus('searchBox','#4791ff')}
  $("#searchInput").onblur=function(){bFocus('searchBox','#bbb')}
  // 搜索框小相机
  $("#searchCamera").onmouseover=function(){bgPositon(this,'0 -20px')}
  $("#searchCamera").onmouseout=function(){bgPositon(this,'0 0')}
  // 百度一下按钮
  $("#searchButton").onmouseover=function(){bdButton(this,'#317ef3','1px 1px 1px #ccc')}
  $("#searchButton").onmouseout=function(){bdButton(this,'#3385ff','0 0 0 0')}
}



//搜索框
function bdColor(x,dp){
  var myInput=$('#searchInput');
  if(myInput==document.activeElement){
    bFocus('searchBox','#4791ff')
  }else{
    x.style.borderColor=dp;
  }
}
//搜索框颜色
function bFocus(id,bfc){
  document.getElementById(id).style.borderColor=bfc;
}
function bgPositon(x,dp){
  x.style.backgroundPosition=dp;
}
function bdButton(x,bc,bs){
  x.style.backgroundColor=bc;
  x.style.boxShadow=bs;
}
