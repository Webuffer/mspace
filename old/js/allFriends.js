function show_friends(){
var line=document.getElementById("up_friends");
lbmc=eval('down_friends');
if(lbmc.style.display=='none'){
  lbmc.style.display ='';
  line.innerHTML='收起';
}
else{
  lbmc.style.display='none';
  line.innerHTML='更多好友日志...';
}
}
