//箭头函数：()=>{ }

//简化了匿名函数的写法(去掉function，小括号和大括号之间使用箭头)，不等价于匿名函数
var arr = [23,9,78,6,45];
arr.sort( (a,b)=>{
    return a-b;
} )


//箭头函数的函数体重只有一行代码，并且是return形式，简化为：
arr.sort((a,b)=>a-b)



//示例：用箭头函数求三个数的平均值
//法一
var pingjun=(a,b,c)=> {
    return (a+b+c)/3;
};
//法二
var pingjun= (a,b,c)=> (a+b+c)/3;

console.log(pingjun(1,2,3));