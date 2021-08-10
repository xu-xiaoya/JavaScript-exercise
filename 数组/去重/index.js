var arr = [1,2,3,2,1,4];
var hash = 0; //一个对象中不允许有重复的下标

for (var i = 0 ; i < arr.length; i++) {
    hash[arr[i]] = 1;
}
console.log(hash);

var res = [];
var i = 0;
for(res[i++] in hash);
console.log (res);