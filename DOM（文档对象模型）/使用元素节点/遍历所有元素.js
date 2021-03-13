function testNextSibling() {
    var el = document.getElementById('mydiv'), ch = el.firstChild, name = '';
    do {
        name = ch.nodeName;
    } while (ch = ch.nextSibling);
    return name;
};
function testChildNodes() {
    var el = document.getElementById('mydiv'), ch = el.childNodes, len = ch.length, name = '';
    for(var count = 0; count < len; count++) {
        name = ch[count].nodeName;
    }
    return name;
};