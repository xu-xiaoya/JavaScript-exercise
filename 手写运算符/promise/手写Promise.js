+function() {
    function myPromise(callBack) {
        this.status = 'pengding';
        // 回调函数执行一次
        callBack(resolve.bind(this), reject.bind(this));
        // 定义一个成功的函数
        function resolve(params) {
            // 修改状态
            if (this.status === 'pending') {
                this.status = 'resolve';
                this.successCallBack(params);
            }
            // console.log(params)
        }
        // 定义一个失败的回调函数
        function reject(err) {
            if (this.status === 'pending') {
                this.status = 'reject';
                this.successCallBack(err);
            }
        }
    }
    
    myPromise.prototype.then = function(success, fail) {
        // 将then方法里成功与失败的回调函数作为当前类的实例
        this.successCallBack = success;
        this.failCallBack = fail;
    }
}();