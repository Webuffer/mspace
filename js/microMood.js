var down = false;
function showRtxt(a){
if(document.getElementById('text'+a).style.display=="none")
   document.getElementById('text'+a).style.display="block";
}

function showExpression(){
if(document.getElementById('expression').style.display=="none")
   document.getElementById('expression').style.display="block";
    var focuss=document.getElementById('expression');
  if(focuss==null){
  focuss=event.srcElement;
  }
}