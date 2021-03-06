
/*innerHeight innerWidth:页面视图大小，去掉边框的宽度
outerHeight outerWidth：视图容器大小

chorme中返回相同的值，即视图大小
*/
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
if (typeof pageWidth != "number") {
    /*IE6
    标准模式： document.documentElement.clientWidth;（IE、Firefox、chorme、safari和Opera适用）
    怪异模式：document.body.clientWidth
    */
    if (document.compatMode == "CSS1Compat") {
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    } else {
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
}