//通过判断arguments中实际参数的个数和类型来执行不同的逻辑
function sayHello() {
    // switch 相当于全等于！
    switch(arguments.length) {
        case 0:
            // return "Hello";
            console.log("Hello");
        case 1:
            return "Hello,"+ arguments[0];
        case 2:
            return (arguments[1] == "cn" ? "你好，" : "Hello，")+ arguments[0];
    };
}
sayHello();//Hello
sayHello("Alex");//Hello，Alex
sayHello("Alex","cn");//你好，Alex