class Emp{
    constructor(eid, ename, eage) {
        this.eid=eid;
        this.ename=ename;
        //先创建一个半隐藏的_eage属性，但是暂时不要给属性值
        Object.defineProperty(this, "_eage", {
            //value:undefined
            writable:true,
            enumerable:false,
            configurable:false
        })
        //再修改Emp类型的原型对象中的访问器属性eage的enumerable为true
        //Object.defineProperty(this,"eage",{...})//错误: eage是定义在class中的，保存在原型对象中。要想修改原型对象中的成员，都要用原型对象本身去修改！而不应该用某一个子对象去修改！
        Object.defineProperty(Emp.prototype,"eage",{
            enumerable:true
        });
        this.eage=eage;
    }
    //创建访问器属性eage，保护eage的值必须介于18~65之间
    get eage() {
        return this._eage;
    }
    set eage(value) {
        if (value>=18&&value<=65) {
            this._eage=value
        } else {
            throw Error(`年龄超范围`)
        }
    }
  }
var erya=new Emp(1001, "erya", 25);
console.log(erya);