/*
递归由两部分组成：递归调用，递归终止条件
一般结合if语句来控制。

1、问题的定义是递归的，如数学中的结阶乘函数、幂函数和斐波那契数列
2、问题所涉及的数据结构是递归的，如文档树
3、问题的解法满足递归的性质，如汉诺塔
*/

//阶乘递归
var f = function(x) {
    if (x < 2) {
        return 1;   //递归终止条件
    } else {
        return x * arguments.callee(x-1);   //递归调用过程
    }
}
alert( f(20) );


/*  Hanoi
参数说明：n表示金片数，abc表示柱子
返回说明：当指定金片数，以及柱子名称，该函数将输出整个移动的过程
*/
function f(n, a, b, c) {
    if (n == 1) {
        document.write(a + "&rarr;" + c + "<br/>");
    } else {
        f(n-1, a, c, b); //递归调用函数，调整参数顺序，让参数a移给b
        document.write(a + "&rarr;" + c + "<br/>");
        f(n-1, b, a ,c);    //当n等于1时，调整参数顺序，让参数b移给c
    }
}
f(3, "A", "B", "C");