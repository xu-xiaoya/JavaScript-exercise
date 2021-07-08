// 1. 如果函数中就不包含this，或刚好希望函数内的this与外部this保持一致时，就可以改为箭头函数
// 2. 不希望函数内的this与函数外的this保持一致时，都不能改为箭头函数。
var erya = {
    sname:"erya",
    friends:["yaya","yuanyuan"],
    //原生写法：
    intr:function(){
        this.friends.forEach(
          function(ele) {
            console.log(`${this.sname}的朋友是${ele}`);
          }.bind(this)
        )
    },

    // 箭头函数可让函数内的this与函数外的this保持一致！
    // intr:function(){简写intr() 既省略了function，但是又不等同于箭头函数，不会影响内部的this！
    intr() {
      this.friends.forEach(
        (ele)=>{
          console.log(`${this.sname}的朋友是${ele}`);
        }
      )
    }
}
erya.intr1();
erya.intr();