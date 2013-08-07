function show_message(t){
var line=document.getElementById("up_message"+t);
lbmc=eval("down_message"+t);
if(lbmc.style.display=='none'){
  lbmc.style.display ='';
  line.innerHTML='许嵩';
}
else{
  lbmc.style.display='none';
  line.innerHTML='许嵩';
}
}
