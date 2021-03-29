/*选择操作：类似于逻辑与，使用竖线 | 描述，表示两个子模式的匹配结果中任选一个*/

//示例一：匹配任意数字或字母
var s1 = "abc";
var s2 = "123";
var r = /\w+|\d+/;			// 选择重复字符类
var b1 = r.test(s1); 		// 返回true
var b2 = r.test(s2); 		// 返回true
