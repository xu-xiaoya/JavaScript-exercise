//不需要为document对象添加删除或替换子节点，因为文档类型只读，而且文档只能有一个固定的元素子节点

//该属性始终指向HTML页面中的html元素
var html = document.documentElement;

//childNodes列表访问文档元素
var html = document.childNodes[0];
var html = document.firstChild;

//访问body元素
var body = document.body;