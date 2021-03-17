//innerText在指定元素中插入文本内容
//outerText功能类似，但可以覆盖原有的元素

//Firefox不支持innerText，但支持textContent
//通用方法get和set
function getInnerText(element) {
    return (typeof element.textContent == "string") ? 
        element.textContent : element.innerText;
}

function setInnerText(element, text) {
    if (typeof element.textContent == "string") {
        element.textContent = text;
    } else {
        element.innerText = text;
    }
}