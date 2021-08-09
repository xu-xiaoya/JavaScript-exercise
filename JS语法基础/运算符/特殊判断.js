!!String("")   // 返回true
!!Boolean("")  // 返回false
!!Number("")   // 返回true
 
!!Boolean([])   // 返回true
!!String([])    // 返回false
!!Number([])    //false
 
!!String(0)   // 返回true  #被转为字符串"0"
!!Number(0)      // 返回false
!!Boolean(0)   // 返回false
 
// [] 转为字符串是 ""       // String([]) 返回""
// [] 转为数字是 0            // Number([]) 返回0
// [] 转为布尔值是 true        // Boolean([]) 返回true
// true 转为数字是 1       // Number(true) 返回1
// false 转为数字是 0