
function(a, b = 0, c = true) {
	console.log(a,b,c);
}

//未出现的实参就会使用默认值
function(1000,2000);	//1000,2000,true