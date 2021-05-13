function cookie(name, value, options) {
    if (typeof value != 'undefined') {  //第二参数存在
        options = options || {};        //初始化第三个参数

        if (value === null) {      //如果第二个参数null，表示删除该cookie值
            value = '';            //清空值     
            options.expires = -1;  //设置失效时间
        }
        
        var expires = '';
        //如果存在时间参数项，且类型为number，或者为具体时间，分别设置时间
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {   //number类型把天书转换为毫秒添加到时间对象中
                date = new Date();
                date.setTime(date.getTime() + (options.expires*24*60*60*1000));
            } else {    //时间格式，则直接传递
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); //设置有效期
        }
        var path = options.path ? '; path=' + options.path : '';        //设置路径
        var domain = options.domain ? '; domain=' + options.domain : '';//设置域
        var secure = options.secure ? '; secure' : '';//设置安全措施，如果为true直接设置，否则空
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');

    } else {                            //第二个参数不存在, 则表示读取指定cookie信息
        var cookieValue = null;
        if (document.cookie && document.cookie != '') { //若cookie信息存在且不为空
            var cookies = document.cookie.split(';');   //切分cookies字符串为数组
            for (var i = 0; i < cookies.length; i++) {  //遍历数组
                var cookie = (cookies[i] || "").replace(/^\s+|\s+$/g, "");  //清除两侧空格符
                if (cookie.substring(0, name.length+1) == (name+'=')) {     //匹配指定cookie名称
                    cookieValue = decodeURIComponent(cookie.substring(name.length +1));
                    break;
                }
            }
        }
        return cookieValue; //返回查找的cookie值
    }
}