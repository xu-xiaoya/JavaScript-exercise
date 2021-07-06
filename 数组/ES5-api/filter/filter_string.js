var arr = [5, "element", 10, "the", true];
var result = arr.filter (
    function (value) {
        return (typeof value === 'string');
    }
);
console.log(result);