//【示例3】在下面示例中，循环访问每个元素的3个属性。最慢的方法是每次都要访问全局变量document，优化后的代码缓存了一个指向集合的引用
//最快的代码将集合的当前元素存入局部变量。
function collectionGlobal() {//较慢方法
    var coll = document.getElementsByTagName('div'), len = coll.length, name = '';
    for(var count = 0; count < len; count++) {
        name = document.getElementsByTagName('div')[count].nodeName;
        name = document.getElementsByTagName('div')[count].nodeType;
        name = document.getElementsByTagName('div')[count].tagName;
    }
    return name;
};
function collectionLocal() {// 较快方法
    var coll = document.getElementsByTagName('div'), len = coll.length, name = '';
    for(var count = 0; count < len; count++) {
        name = coll[count].nodeName;
        name = coll[count].nodeType;
        name = coll[count].tagName;
    }
    return name;
};
function collectionNodesLocal() {// 最快方法
    var coll = document.getElementsByTagName('div'), len = coll.length, name = '', el = null;
    for(var count = 0; count < len; count++) {
        el = coll[count];
        name = el.nodeName;
        name = el.nodeType;
        name = el.tagName;
    }
    return name;
};