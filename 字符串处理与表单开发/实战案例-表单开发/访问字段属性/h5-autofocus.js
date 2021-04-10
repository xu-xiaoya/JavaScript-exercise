<input type = "text" name = "name" autofocus></input>
//不支持该属性的浏览器兼容：
var field = form.elements["name"];
if (field.autofocus !== true) {
    field.focus;
}