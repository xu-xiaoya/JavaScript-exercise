function filter_string() {
    var ar = [5, "element", 10, "the", true];
    var result = ar.filter (
        function (value) {
            return (typeof value === 'string');
        }
   );
   document.write('<br><br><br>'+result+'<br>');
}