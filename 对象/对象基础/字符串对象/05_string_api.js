var str = 'erya正在玩dangang';
//获取字符串长度
console.log( str.length );//14

//获取下标对应的字符
console.log( str.charAt(0),str[0] );//e e



//查找字符串中是否含有某个字符串
var str = 'javascript';
//找第1个
console.log( str.indexOf('a') );//1
//找最后1个
console.log( str.lastIndexOf('a') );//3

//练习：声明变量保存用户输入的邮箱，如果邮箱中不含有@，打印'邮箱格式错误'，否则打印'邮箱格式正确'
var email = 'tao123@126.com';
if( email.indexOf('@') === -1 ){
  console.log('邮箱格式错误');
}else{
  console.log('邮箱格式正确');
}



//英文字母大小写转换
var str = 'JavaScript';
//转大写
console.log( str.toUpperCase() );//JAVASCRIPT
//转小写
console.log( str.toLowerCase() );//javascript



var str = 'javascript';
//截取字符串
//console.log( str.slice(4) );
//console.log( str.slice(4,7) );
console.log( str.slice(-3,-1) );

//练习：声明变量保存邮箱，分别截取出邮箱的用户名和域名
var email = 'tao123@tedu.cn';
//查找@的下标
var index = email.indexOf('@');
//console.log(index);
var userName = email.slice(0,index);
var domain = email.slice(index+1);
console.log(userName,domain);


//按照长度截取字符串
var str = 'javascript';
//console.log( str.substr(4) );
//console.log( str.substr(4,3) );
console.log( str.substr(-3,2) );


//练习：声明变量保存一个人的身份证号码，分别截取生日中的年月日和性别，最后打印出以下格式   
//xxxx年xx月xx日  性别x
var id = '110235197307151870';
var year = id.substr(6,4);
var month = id.substr(10,2);
var date = id.substr(12,2);
var sex = id.substr(-2,1);
//判断性别 
var s = sex%2 ? '男' : '女';
console.log(year + '年' + month + '月' + date + '日 性别' + s);



var arr = ['a','b','c'];
//数组转为字符串
var str = arr.join('/'); //'a/b/c'
//console.log(str);
//字符串转为数组
console.log( str.split('/') );



//练习：截取文件名称的后缀名
var str = 'web.2104.tao.jpg';
var arr = str.split('.');
//最后一个元素
console.log(arr[arr.length - 1]);