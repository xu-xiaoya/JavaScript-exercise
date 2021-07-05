//bind把函数绑定到指定对象上
//基于原函数创建一个一模一样的函数副本，并永久替换函数中的this为指定的对象

//示例一：
//有一个公共的计算器函数，计算每个人的总工资
//              底薪   奖金1   奖金2
function cal(base, bonus1, bonus2){
    console.log(`${this.ename}的总工资是:${base+bonus1+bonus2}`)
}
  
var erya={ename:"erya"};
var erya1={ename:"erya1"};

//erya要cal()计算自己每个月的薪资，每次call借用麻烦，所以买一个一模一样的自己专属的cal()函数。
var cal1=cal.bind(erya,10000);
cal2(1000,2000);
cal2(1000,1000);
//   erya1抢erya的函数
jisuan2.call(hmm,1000,2000);


// 示例二：
var checkNumericRange = function (value) {      //原函数，范围上下限根据当前实例对象的minimum和maximum属性决定。
    if (typeof value !== 'number')
        return false;
    else 
        return value >= this.minimum && value <= this.maximum;
}
var range = {minimum:10, maximum:20};           //range对象
var boundCheckNumericRange = checkNumericRange.bind(range);     //将checkNumericRange函数绑定到range对象上
var result = boundCheckNumericRange(12);
document.write(result);//true;