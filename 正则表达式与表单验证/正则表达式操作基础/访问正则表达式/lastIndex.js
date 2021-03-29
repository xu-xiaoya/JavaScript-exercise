var s = "javascript is not java";
var a = /a/gi;      //正则表达式直接量

/*exec()与lastIndex配合实现全局检索 */
r.exec(s);  //第一次执行匹配
alert(r.lastIndex); //2

r.exec(s);  //第二次执行匹配
alert(r.lastIndex); //4

r.exec(s);  //第三次执行匹配
alert(r.lastIndex); //20

r.exec(s);  //第四次执行匹配
alert(r.lastIndex); //22

r.exec(s);  //第五次执行匹配
alert(r.lastIndex); //0