/**
 * Created by yan on 2016/10/14.
 */
// 定义通过id获得元素的方法
function getEle(sid){
  return document.getElementById(sid);
}
// 封装$
window.$=HTMLElement.prototype.$=function(selector){
  var elems=(this==window?document:this).querySelectorAll(selector);
  return elems==null?null:elems.length==1?elems[0]:elems;
}
// 获得元素顶部距离的方法
HTMLElement.prototype.getElementTop=function(){
  var top=this.offsetTop;//当前元素距父元素顶部top
  var curr=this.offsetParent;//返回一个对象，该对象是距离当前元素最近的已定位父元素
  while(curr!=null){
    top+=curr.offsetTop;
    curr=curr.offsetParent;
  }
  return top;
}