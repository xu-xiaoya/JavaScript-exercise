// function order(zhushi="米饭", xiaochi="鸡腿", drink="可乐") {
//     console.log(`
//     您点的套餐是：
//         主食：${zhushi},
//         小吃：${xiaochi},
//         饮料：${drink}
//     `);
// }
// order();
// order("汉堡","派","奶茶");
// // 只想换主食，另两个默认
// order("巨无霸汉堡");



// 只想换小吃,上述方法不可行
// 参数解构：
// 1.将所有形参变量装扮成一个对象结构
//一旦定义函数时，采用对象解构形式，则调用函数时，并须传入一个对象结构，至少是一个{}

// function order1({
//     zhushi:zhushi, 
//     xiaochi:xiaochi, 
//     drink:drink
//简写：配对的属性名和形参变量名相同，只写一个，既配对，又当形参变量名
function order({
    zhushi = "米饭",
    xiaochi = "鸡腿",
    drink = "可乐"
}) {
    // zhushi === undefined && (zhushi="米饭");
    // xiaochi === undefined && (xiaochi="鸡腿");
    // drink === undefined && (drink="可乐");
    console.log(`
    您点的套餐是：
        主食：${zhushi},
        小吃：${xiaochi},
        饮料：${drink}
    `);
}
// 一个都不换，也要加上{},找不到undefined，使用短路逻辑设置默认值
order1({});
// 全都换
order1({
    // 配对  实参值
    zhushi:"汉堡",
    xiaochi:"派",
    drink:"奶茶"
});
// 2.调用函数：将所有实参值，装扮成和定义函数时形参结构一模一样的结构
order1({
    xiaochi:'薯条'
});