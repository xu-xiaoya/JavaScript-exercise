//反引号(`)标识，它可以当作普通字符串使用，
//也可以用来定义多行字符串，或者在字符串中嵌入变量。

// 普通字符串
console.log(`In JavaScript '\n' is a line-feed.`)
 
// 多行字符串
console.log(`In JavaScript this is
not legal.`)

var name = "ERYA", time = "tomorrow";
console.log(`
Hello ${name}, 
how are you ${time}?
`);