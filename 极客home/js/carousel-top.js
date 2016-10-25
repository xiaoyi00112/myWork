/**
 * Created by yan on 2016/10/14.
 */
// 图片轮播
function carouselInit(){
  var animated=false;
  var index=0;
  var container=getEle("swiper-wrapper");
  var imgList=$("#swiper-wrapper");
  var dots=$("#banner-pagination .swiper-pagination-switch");
  var prev=getEle("banner-arrow-left");
  var next=getEle("banner-arrow-right");
  var timer;
  // 绘制图形
  function topAnimation(offset){
    var newLeft=parseInt(container.style.left) +offset;
    animated=true;
    var time=500;
    var interval=10;
    var step=offset/(time/interval);
    function go(){
      if((step>0 && parseInt(container.style.left)<newLeft) || (step<0 && parseInt(container.style.left)>newLeft)){
        container.style.left=parseInt(container.style.left)+step+"px";
        setTimeout(go,interval);
      }else{
        animated=false;
        container.style.left=newLeft+"px";//不可省略的一步，因为step不一定是整数，所以上面得到的container的left值不一定是整数
        if(parseInt(container.style.left)>-750){
          container.style.left=-5250+"px";
        }else if(parseInt(container.style.left)<-5250){
          container.style.left=-750+"px";
        }
      }
    }
    go();
  }

  // 点击下面小方点
  for(var i=0;i<dots.length;i++){
    dots[i].onclick=function(){
      if(!animated){
        var a=getNowButton();
        this.className="swiper-pagination-switch swiper-visible-switch swiper-active-switch";
        for(var j=0;j<dots.length;j++){
          if(dots[j].className=="swiper-pagination-switch swiper-visible-switch swiper-active-switch"){
            var offset=-750*(j-a);
            index=j;
            topAnimation(offset);
          }
        }
      }
    }
  }
  // 重置现在获得焦点的小方点样式，并返回下标值
  function getNowButton(){
    for(var i=0;i<dots.length;i++){
      if(dots[i].className=="swiper-pagination-switch swiper-visible-switch swiper-active-switch"){
        dots[i].className="swiper-pagination-switch";
        return i;
      }
    }
  }

  // 点击尖角号同时改变小方点
  function topButton(){
    getNowButton();
    dots[index].className="swiper-pagination-switch swiper-visible-switch swiper-active-switch";
  }

  // 左右尖角点击事件
  next.onclick=function(){
    if(!animated){
      if(index==6){
        index=0;
      }else{
        index+=1;
      }
      topButton();
      topAnimation(-750);
    }
  }
  prev.onclick=function(){
    if(!animated){
      if(index==0){
        index=6;
      }else{
        index-=1
      }
      topButton();
      topAnimation(750);
    }
  }

  // 动画
  function topPlay(){
    timer=setInterval(function(){
      next.onclick();
    },5000)
  }
  function topstop(){
    clearInterval(timer)
  }

  topPlay();
  imgList.onmouseover=topstop;
  imgList.onmouseout=topPlay;
}
carouselInit();








