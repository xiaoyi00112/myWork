/**
 * Created by yan on 2016/10/17.
 */
(function(){
  var timer;
  var index=0;
  var animated=false;//动画是否播放
  var swiperWrapper=$('.jk-story .story-container .swiper-wrapper');//内容容器
  var storyPagination=$(".jk-story .story-container .story-pagination span");//下面小按钮

  function Animate(offset){
    animated=true;
    var newLeft=parseInt(swiperWrapper.style.left)+offset;
    var time=500;//位移总时间
    var interval=10;//位移间隔
    var speed=offset/(time/interval);
    function go(){
      if((speed < 0 && parseInt(swiperWrapper.style.left)>newLeft)||(speed > 0 && parseInt(swiperWrapper.style.left)<newLeft)){
        swiperWrapper.style.left=parseInt(swiperWrapper.style.left)+speed+"px";
        setTimeout(go,interval);
      }else{
        animated=false;
        swiperWrapper.style.left=parseInt(newLeft)+"px";
        if (parseInt(swiperWrapper.style.left)>-1000){
          swiperWrapper.style.left=-2000+"px";
        }
        if(parseInt(swiperWrapper.style.left)<-2000){
          swiperWrapper.style.left=-1000+"px";
        }
      }
    }
  go();
  }

  function showButton(){
    for(var i=0;i<storyPagination.length;i++){
      if(storyPagination[i].className=="swiper-pagination-switch swiper-visible-switch swiper-active-switch"){
        storyPagination[i].className="swiper-pagination-switch";
        break;
      }
    }
    storyPagination[index].className="swiper-pagination-switch swiper-visible-switch swiper-active-switch";
  }
  // 往左移
  function next(){
    if(index==1){
      index=0;
    }else{
      index += 1;
    }
    showButton();
    if(!animated){
    Animate(-1000);
    }
  }
  // 往右移
  function prev(){
    if(index==0){
      index=1;
    }else{
      index -= 1;
    }
    showButton();
    if(!animated){
      Animate(1000);
    }
  }
  // 为下面小按钮绑定点击事件
  for(var i=0;i<storyPagination.length;i++){
    storyPagination[i].onclick=function(){
      if(this.className=="swiper-pagination-switch swiper-visible-switch swiper-active-switch"){
        return;
      }
       var offset=-1000*(parseInt(this.getAttribute("data-index"))-index);
      index=this.getAttribute("data-index");
      if(!animated){
        Animate(offset);
      }
      showButton();
    }
  }

  // 动画
  function play(){
    timer=setInterval(function(){
      next();
    },3000)
  }
  function stop(){
    clearInterval(timer);
  }
  play();
  // 鼠标移入停止轮播
  swiperWrapper.onmouseover=stop;
  // 移除继续播放
  swiperWrapper.onmouseout=play;
})();

