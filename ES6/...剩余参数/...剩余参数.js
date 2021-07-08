// ES6**箭头函数中碰到参数个数不确定**的情况，都要用剩余参数语法来代替arguments（箭头函数不能使用）
//只要使用arguments，都换成剩余参数语法！ 

//定义一个函数，求任意多个数字的和
var add=(...arr)=>{
    console.log(`本次收到的arr:${arr}`);
    return arr.reduce(
      (捐款箱,当前值)=>捐款箱+当前值, 0
    );
    // return arr.reduce(
    //   function(捐款箱,当前值){
    //     return 捐款箱+当前值
    //   },
    //   0//起始值
    // )
}
console.log(add(1,2,3));//6
console.log(add(1,2,3,4,5));//15


// ...数组名 收集的是除了前两个形参变量对应的实参值之外的剩余实参值
function cal(ename,...arr){
    console.log(ename, arr);
    var total=arr.reduce(
      function(捐款箱,当前值){
        return 捐款箱+当前值
      },
      0//起始值
    );
    console.log(`${ename}的总工资是${total}`)
}
cal("Li Lei",10000,1000,2000);
cal("Han Meimei",3000,500,1000,2000,3000);