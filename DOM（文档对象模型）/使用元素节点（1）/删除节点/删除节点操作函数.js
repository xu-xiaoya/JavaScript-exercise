// 封装删除节点函数
// 参数：e表示预删除的节点
// 返回值：返回被删除的节点，如果不存在指定的节点，则返回undefined值
function remove(e) {
    if (e) {
        var _e = e.parentNode.removeChild(e);
        return _e;
    }
    return undefined;
}

// 封装删除所有子节点的方法
// 参数：e表示预删除所有子节点的父节点
function empty(e) {
    while(e.firstChild) {
        e.removeChild(e.firstChild);
    }
}

