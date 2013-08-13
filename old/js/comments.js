function writeBackComment(i){
var line=document.getElementById("backUp"+i);
lbmc=eval('backDown'+i);
if(lbmc.style.display=='none'){
  lbmc.style.display ='';
  line.innerHTML='取消回复';
}
else{
  lbmc.style.display='none';
  line.innerHTML='回复';
}
}
