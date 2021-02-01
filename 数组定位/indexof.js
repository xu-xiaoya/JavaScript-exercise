function IndexOf() {
    var ar = ["ab","cd","ef","ab","cd"];
    for (var i in ar)
        document.write(ar[i]+ ", ");
    document.write("<br/><br/>");

    document.write("cd index：" + ar.indexOf("cd") +'<br/>');//1
    document.write("cd index from 2：" + ar.indexOf("cd", 2) +'<br/>');//4
    document.write("gh index ：" + ar.indexOf("gh") + '<br/>');//-1
    document.write("ab index from -2：" + ar.indexOf("ab",-2) + '<br/>');//3
}