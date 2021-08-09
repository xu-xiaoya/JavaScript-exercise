// 在末尾添加元素
/* 1.使用for循环和push方法 */
function append(arr, item) {
    const res = []
    for(let i=0;i<arr.length;i++) {
        res.push(arr[i])
    }
    res.push(item)
    return res;
}

/* 2.forEach替代for循环 */
function append(arr, item) {
    const res = []
    arr.forEach(element => {
        res.push(element)
    });
    res.push(item)
    return res;
}

/* 3.使用concat合并 */
function append(arr, item) {
    return arr.concat(item);
}

/* 4.使用slice浅拷贝数组 */
function append(arr,item) {
    let res = arr.slice(0)
    res.push(item)
    return res
}

/* 5.使用扩展运算符 */
function append(arr,item) {
    let res = [...arr,item]
    return res
}