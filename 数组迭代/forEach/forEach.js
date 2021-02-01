function showResults(value, index, ar) {
    document.write("value：" + value);
    document.write("  index：" + index);
    document.write("<br/>");
}
function foreach1() {
    var letters = ['a','b','c'];
    letters.forEach(showResults);
    document.write("<br/>");
}