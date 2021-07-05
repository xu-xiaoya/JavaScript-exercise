Array.prototype.sum = function() {
    var total = 0;
    // 谁调用this指向谁
    for (var i = 0; i < this.length; i++){
        total += this[i];
    }
    return total;
}
var arr1=[1,2,3];
console.log(arr1.sum());//6
var arr2=[1,2,3,4,5];
console.log(arr2.sum());//15