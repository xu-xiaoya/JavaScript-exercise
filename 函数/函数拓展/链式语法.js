//getElement函数获取id = 'box'的DOM元素。
//通过链式语法分别调用DOM的拓展方法来移动元素、修改尺寸和样式，以及添加行为。

getElement('box').
    move(350, 150).
    width(100).height(100).
    color('red').
    border('10px outset').
    padding('4px').
    appendText("使用链式语法")