const PENDING = "PENDING";
const RESOLVE = "RESOLVE";
const REJECT = "REJECT";

class myPromise1 {
    constructor(executor) {
        // 初始化：挂起状态PENDING
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallback = [];
        this.onRejectedCallback = [];

        const resolve = (value)=> {
            if (this.status === PENDING) {
                this.status = RESOLVE;
                this.value = value;
                // console.log(value)
                this.onFulfilledCallback.forEach((cb)=>cb());
            }
        }
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECT;
                this.reason = reason;
                // console.log(reason);
                this.onRejectedCallback.forEach((cb)=>cb());
            }
        }
        try {
            executor(resolve, reject);
        } catch(err) {
            reject(err);
        }
    }
    then(onFulfilled, onRejected) {
        if (this.status === RESOLVE) {
            queueMicrotask(()=> {
                onFulfilled(this.value);
            })    
        }
        if (this.status === REJECT) {
            queueMicrotask(()=> {
                onRejected(this.reason);
            })
        }

        if (this.status === PENDING) {
            this.onFulfilledCallback.push(()=>{
                queueMicrotask(()=> {
                    onFulfilled(this.value);
                })
            })
            this.onRejectedCallback.push(()=>{
                queueMicrotask(()=> {
                    onRejected(this.reason);
                })
            })
        }
    }

}