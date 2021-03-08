/* 
plugins:一个数组,数组中每一项都包含下列属性：
name：插件名字   description：插件描述
filename：插件的文件名      length：插件所处理的MIME类型数量
*/

//一、检测非IE插件(Ff,Sa,Op,Chrome)
function hasPlugin(name) {
    name = name.toLoweCase();
    for (var i = 0; i < navigator.plugins.length; i++) {
        if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
            return true;
        }
    }
    return false;
}
alert(hasPlugin("Flash"));
alert(hasPlugin("QuickTime"));
alert(hasPlugin("Java"));

//二、检测IE插件,使用ActiveXObject，IE是用COM对象的方式实现插件的，而COM对象用唯一标识符来标识。
function hasIEPlugin(name) {
    try {
        new ActiveXObject(name);
        return true;
    } catch (ex) {
        return false;
    }
}
alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
alert(hasIEPlugin("QuickTime.QuickTime"));