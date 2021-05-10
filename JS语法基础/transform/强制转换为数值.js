var n1 = Number('2');//2
var n2 = Number('2a');//NaN
var n3 = Number(undefined);//NaN
var n4 = Number(null);//0
var n5 = Number(true);//1
var n6 = Number(false);//0

console.log(n1, n2, n3, n4, n5, n6);