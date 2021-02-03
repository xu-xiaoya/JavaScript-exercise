Array.prototype._sum = Array.prototype.sum || 
(   Array.prototype.sum = function() {
        var _n = 0;
        for (var i in this) {
            if (this[i] = parseFloat(this[i]))
                _n += this[i];
        };
        return _n;
    }
);
Object.prototype.sum = Array.prototype._sum;

function extend() {
    var a = [1,2,3,4,5,6,7,8,"9"];
    alert(a.sum());    
}
