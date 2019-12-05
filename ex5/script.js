var list = document.querySelectorAll('section.red-background');
var i = 0;
document.body.onload = function() {
    while (i < list.length) {
        if (i % 2 == 0) {
            i += 1;
        } else {
            list[i].style.backgroundColor = 'green';
            i += 1;
        }
    }
}