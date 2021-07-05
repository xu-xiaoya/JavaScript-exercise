var a = [10,11,12];

//for-in方法
for (i in a) {
    console.log(a[i]+ ",");
}

a.forEach((a,b)=>{
    console.log(a);//a值
    console.log(b);//b下标
})

var sum = 0;
a.forEach(
    function addvalue(value) {
        sum += value;
    }
);
console.log("sum : "  + sum );