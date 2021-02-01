function foreach_sum() {
    var a = [10,11,12];
    for (i in a) {
        document.write(a[i]+ ",");
    }
    var sum = 0;
    a.forEach(
        function addvalue(value) {
            sum += value;
        }
    );
    document.write("sum : "  + sum + '<br/>');
}