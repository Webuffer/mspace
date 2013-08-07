function check_content(){
  //验证日志是否为空
  if($("textarea").value == ""){
    $("M_content").innerHTML ="不能发表空日志啊亲！！";
    $("textarea").select();
    $("textarea").focus();
    return false;
 
  }
}
function $(id){
  return document.getElementById(id);
} 