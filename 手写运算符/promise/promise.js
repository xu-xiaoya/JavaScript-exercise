// 1. executor同步执行，传入两个函数resolve，reject,需要内部定义两个函数
// 2. resolve和reject都需要传入成功的原因和失败的结果参数
// 3. 定义then方法，传入两个函数参数，成功的回调以及失败的回调
// 4. 内部有三个状态pending => resolve || pending => reject
// 5. 如果是resolve需要执行then的第一个参数( function )
// 6. 如果是reject需要执行then后面第二个参数( function )
// 7. onFulfilled || onRejected 执行的时候还需要有参数，成功的结果或者失败的原因
// 8. 只有在pending的时候状态才能改变
// 9. 处理executor内部的错误，调用reject同时传入错误对象进去
// 10.处理异步调用的resolve &并且能够多次调用then方法(then传进来的方法存起来，状态改变时候再去调用)
// 11.then方法的两个参数必须都是异步执行的，不能再当前执行栈执行


// 1.promise是个类
const PENDING = "PENDING";
const RESOLVE = "RESOLVE";
const REJECT = "REJECT";
class Promise {
    constructor(executor) {
        // 默认的状态
        this.status = PENDING;
        // 成功的结果
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;
        // 成功处理函数的数据集合
        this.onFulfilledCallback = [];
        // 失败处理函数的数据集合
        this.onRejectedCallback = [];

        const resolve = (value)=>{
            // 保证状态的唯一性
            if (this.status === PENDING) {
                this.status = RESOLVE;
                this.value = value;
                // 在resolve时把callback数组中的函数全部执行
                this.onFulfilledCallback.forEach((cb)=>cb());
            }
            
        }
        const reject = (reason)=>{
            // 保证状态的唯一性
            if (this.status === PENDING) {
                this.status = REJECT;
                this.reason = reason;
                this.onRejectedCallback.forEach((cb)=>cb());
            }
        }
        try {
            executor(resolve,reject);
        } catch(error) {
            reject(error);
        }
    } 


    then(onFulfilled, onRejected) {
        // onFulfilled 成功的处理函数
        // onRejected 失败的处理函数
        if (this.status === RESOLVE) {
            queueMicrotask(()=>{
                onFulfilled(this.value);
            })
        }
        
        if (this.status === REJECT) {
            queueMicrotask(()=>{
                onRejected(this.reason);
            })
        }

        if (this.status === PENDING) {
            this.onFulfilledCallback.push(()=>{
                onFulfilled(this.value);
            });
            this.onRejectedCallback.push(()=>{
                onRejected(this.reason);
            })
        }   
    }
}