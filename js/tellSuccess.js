function tellSuccess(k){
var line=document.getElementById("in_success"+k);
lbmc=eval("out_success"+k);
if(lbmc.style.display=='none'){
  lbmc.style.display ='';
  line.innerHTML='取消关注';
}
else{
  lbmc.style.display='none';
  line.innerHTML='加关注';
}
}
