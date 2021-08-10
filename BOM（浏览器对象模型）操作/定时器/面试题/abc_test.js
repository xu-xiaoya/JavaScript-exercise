this.b = '2';
function abc() {
    let b = 1; ++b;
    // 定时器的回调函数必须等在主程序执行完才开始执行
    setTimeout(
        ()=>{
            test('fun test')
        }
        // function， new Function
        // function() {
        //     test('fun test')
        // }
    ,0);

    // 迷惑：不是定时器！
    // 函数名（实参值）——调用函数——立刻执行
    setTimeout(
        test('test fun')
    ,1000);
    console.log(b);
    function test(str) {
        this.b++;
        console.log(str);
        console.log(this.b++);
    }
}
abc();    