var a = [];

a[true] = 1;
alert(a[true]);//1，true和false不执行转换

a["1"] = 1;//若文本为数字，可直接使用数字下标访问
alert(a[1]);//1

a["张三"] = 1;
a["李四"] = 2;
a["王五"] = 3;

function douhao() {
    a[0,0] = 1;
    a[0,1] = 2;
    a[1,0] = 3;//js不支持二维数组，但可模仿二维数组的写法
    a[1,1] = 4;//将二维数组的下标视为逗号表达式：运算的返回值是最后一个值
    document.write(a.length + '<br/>');//2
    document.write(a[0] + '<br/>');//3
    document.write(a[1] + '<br/><br>');//4
}

function douhao1() {
    var a = [], i = 1;
    while (i < 10) {
        a[i *= 2, i] = i;
    }
    document.write( 'length: ' +a.length + '<br>');
    document.write(a+ '<br><br>');
}

function object() {
    var a = [];
    var b = function() {
        return 2;
    }
    a[b] = 1;
    document.write(a[b] + '<br>');//1
    
    a[b()] = 1;//a[2] = 1;
    document.write(a[2]+ '<br>');//1
}
