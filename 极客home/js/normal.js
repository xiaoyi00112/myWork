/**
 * Created by yan on 2016/10/14.
 */
var spans=$(".jk-college span");
var iS=$(".jk-college i");
/*function aa(){
  var a=10;
  for(var i=0;i<5;i++){
    function bb(){
      console.log(a+i);
    }

  }
  bb();
}
aa();*/
//职业学院阴影，闭包
for(var i=0;i<4;i++) {
  spans[i].onmouseover = spans[i].onmouseout = function (i) {
    return function () {
      if (iS[i].style.opacity == 0) {
        iS[i].style.opacity = 0.5;
      } else {
        iS[i].style.opacity = 0;
      }
    }
  }(i);
}


var floor={
  init:function(){
    var gotop=getEle("goTopButton")
    var self=this;
    window.addEventListener("scroll",function(){
      var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//页面滚动的高度
      if(scrollTop>100){
        gotop.style.display="block";
      }else{
        gotop.style.display="none";
      }
    },false);
    gotop.addEventListener('click',function(){
      var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
      var time=100;
      var interval=10;
      var totalWay=scrollTop;
      var step=totalWay/(time/interval);
      function go(){
        if(scrollTop>0){
          scrollTop=scrollTop-step;
          window.scrollTo(0,scrollTop);
          setTimeout(go,interval);
        }
      }
      go();
    },false);

  }
}
floor.init();


