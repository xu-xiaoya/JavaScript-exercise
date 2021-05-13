//存储值 setItem(key, value)
sessionStorage.setItem("key", "value");
localStorage.setItem("site", "mysite.cn");

//读取值 getItem(key)
var value = sessionStorage.getItem("key");
var site = localStorage.getItem("site");

//删除值 removeItem(key)
sessionStorage.removeItem("key");
localStorage.removeItem("site");

//清空本地存储 clear()
sessionStorage.clear();
localStorage.clear();

/*
web storage支持点语法或字符串数组[]方式进行数据存储

var storage = window.localStorage;
storage.key1 = "hello";
storage["key2"] = "world";
*/

//遍历操作 提供key()方法和length属性
var storage = window.localStorage;
for (var i = 0, len = storage.length; i < len; i++) {
    var key = storage.key[i];
    var value = storage.getItem(key);
    console.log(key + " = " + value);
}

//storage事件 键值改变或clear触发
if (window.addEventListener) {
    window.addEventListener("storage", handle_storage, false);
} else if (window.attachEvent) {
    window.attachEvent("onsta=orage", handle_storage);
}
function handle_storage(e) {
    var logged = "key:" + e.key + ", newValue:" + e.newValue + ", OldValue" + e.OldValue + 
    ", url:" + e.url + ", storageArea:" + e.storageArea;
    alert(logged);
}