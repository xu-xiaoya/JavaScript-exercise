function intr(str:string):string {
    return `我的自我介绍${str}`
}
console.log(intr("you can you up"));

// intr(); //报错
// intr(100);   //报错


// ?可以不传参
function intr2(str?:string) {
    if (str === undefined) {
        str = "主人很懒，啥也没写"
    }
    console.log(`我的自我介绍${str}`);
}
intr2();

//默认值
function intr3(str:string = "主人很懒，啥也没写") {
    console.log(`我的自我介绍${str}`);
}
intr3();

function add(...arr:number[]):number {
    return arr.reduce((box,val)=>box+val, 0);
}
console.log(add(1,2,3))