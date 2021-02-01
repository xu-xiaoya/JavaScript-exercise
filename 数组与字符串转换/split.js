function Split() {
    var s = "1==2==3==4==5";
    var a = s.split("==");//将==作为分隔的符号
    document.write("split “==”：" + a +'<br>');
    document.write("typeof 类型：" + typeof a +'<br>');//typeof对象和数组都为Object
    document.write("constructor Array： ");
    document.write(a.constructor == Array)//constructor可区分数组和对象
}