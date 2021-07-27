function pay():void;
function pay(money:number):void;
function pay(cardld:string, pwd:string):void;

function pay(x?:any, y?:any) {
    //如果连第一个参数都没传，说明没有传任何参数
    //则执行手机支付
    if (x === undefined) {
        console.log("手机支付")
    } else if (y === undefined) {
        //否则如果x传了值，但是y没有传值
        //说明只传了一个参数，要执行现金支付
        console.log(`现金支付，收您${x}元`)
    } else {
        //否则如果两个参数都传了，说明执行刷卡支付
        console.log(`刷卡支付，从您卡号${x}中扣款成功...`)
    }
}

pay();
pay(100)
pay("6553 64444", "1230");