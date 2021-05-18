var a = [1,2,true,"a", "b"];

//push在尾部添加一个元素
a.push("c");
console.log("尾部添加——push 'c'：" + a);//1,2,true,"a","b","c"


//pop在尾部删除一个元素
a.pop();
console.log("尾部删除——pop：" + a);//1,2,true,"a","b"


//unshift在头部添加多个元素
a.unshift(3,4);
console.log("头部一次添加两个元素——unshift 3,4：" + a);//3,4,1,2,true,"a","b"
a.shift();//shift在头部删除一个元素
a.shift();


//unshift分多次添加
a.unshift(3);
a.unshift(4);
console.log("头部分两次添加两个元素——unshift 3,4：" + a);//4,3,1,2,true,"a","b"


//shift在头部删除一个元素
a.shift();
console.log("头部删除——shift：" + a);//3,1,2,true,"a","b"