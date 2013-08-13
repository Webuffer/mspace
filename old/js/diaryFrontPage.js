function ShowKinds(i) {
var button=document.getElementById("a"+i);
    lbmc = eval('Fdaily' + i);
    if (lbmc.style.display == 'none') {
        
        lbmc.style.display = '';
	button.innerHTML='点击收起';
    }
    else {
        lbmc.style.display = 'none';
	button.innerHTML='点击查看';
    }
}