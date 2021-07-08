var arr = [
    {pid:1, pname:'yaya'},
    {pid:2, pname:'feifei'},
    {pid:3, pname:'yuanyuan'}
]
// 取出数组第一个和第二个对象
var [p1,p2] = arr;
//    0  1
console.log(p1);
console.log(p2);

//取出数组第一个和第三个对象
var [p1, , p3] = arr;
//   0      2
console.log(p1);
console.log(p3);