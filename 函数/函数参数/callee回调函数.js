//匿名函数比较有用
//argumentts.callee获取匿名函数
function f(x,y,z) {
    var a = arguments.length;//函数实参个数
    var b = arguments.callee.length;//Function对象的length返回函数形参个数
    if (a != b) {
        throw new Error("传递的参数不匹配");
    } else {
        return x+y+z;
    }
}

function tao(madai) {
    console.log('涛哥开始跑第1棒');
    console.log('涛哥到达第1棒终点');
    //调用dong
    //madai=dong
    //madai=function(){}
    //调用传递函数，通过形参madai
    madai(); //dong()  (function(){  })()
  }
  function dong(){
    console.log('东哥开始跑第2棒');
    console.log('东哥达到终点');
  }
  //dong就是回调函数
  tao(dong);
  //匿名函数也是回调函数
  tao( function() {
    console.log('陌生人开始跑...');
  } );