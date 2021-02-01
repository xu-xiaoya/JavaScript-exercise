function LastIndexOf() {
    var ar = ["ab","cd","ef","ab","cd"];
    document.write("<br/><br/>LastIndexOf（求下列值最后一个匹配项索引）<br/>");

    document.write("cd index：" + ar.lastIndexOf("cd") +'<br/>');//4
    document.write("cd index from 2：" + ar.lastIndexOf("cd", 2) +'<br/>');//1
    document.write("gh index ：" + ar.lastIndexOf("gh") + '<br/>');//-1
    document.write("ab index from -3：" + ar.lastIndexOf("ab",-3) + '<br/>');//0
}