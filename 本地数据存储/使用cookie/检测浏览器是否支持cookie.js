
if (navigator.cookieEnabled) {
    setCookie();
    var n = getCookie("zhu");
    alert(n);
}

function getCookie(name) {
    var start = document.cookie.indexOf(name + "=");  //提取cookie中与名称相同的字符串的索引
    var len = start + name.length + 1;                  //计算值的的索引位置
    if ((!start) && (name != document.cookie.substring(0, name.length))) {  //不存在返回null
        return null;
    }
    if (start == - 1) return null;  //没找到返回null
    var end = document.cookie.indexOf(";", len);    //获取值后面的分号索引位置
    if (end == - 1) end = document.cookie.length;   //索引值为-1，设置为cookie字符串的长度（到末尾）
    return unescape(document.cookie.substring(len, end));//获取名称对应的街区制并解码返回
}

//写入cookie信息
//name表示cookie名称，value表示cookie值，expires表示有效天书，path表示有效路径
//domain表示域，secure表示安全性设置。
function setCookie( name, value, expires, path, domain, secure) {
    var today = new Date();             //实例化时间对象
    today.setTime(today.getTime());     //设置现在时间
    if (expires) {                      //如果有效期存在，转换为毫秒
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + (expires));           //新建有效期时间对象
    document.cookie = name + "=" + escape(value) +                      //写入cookie信息
    (( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +    //指定有效期
    (( path ) ? ";path=" + path : "" ) +                                //指定有效路径
    (( domain ) ? ";domain=" + domain : "" ) +                          //指定有效域
    (( secure ) ? ";secure" : "" );                                     //指定是否加密传输
}