//参数nodes表示nodeList，返回值为数组或null
function convertToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0);//非IE或IE9+
    } catch(ex) {   //IE8及以下需手动枚举
        array = new Array();
        for (var i = 0, len = nodes.length; i < len; i++) {
            array.push(nodes[i]);
        }
    }
}