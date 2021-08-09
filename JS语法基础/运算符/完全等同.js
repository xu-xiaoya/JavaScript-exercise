function isEqual(val1,val2){
    return val1===val2
}

// '==='判断的话+0和-0会认为是相等的，NaN会认为是不相等的。
//  所以碰到这两种情况要进行特殊判断
function isEqual(val1,val2){
    return Object.is(val1,val2)
}